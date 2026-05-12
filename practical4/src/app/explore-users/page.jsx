'use client';

import { useState, useEffect } from 'react';
import apiClient from '../../lib/api-config.js';
import Link from 'next/link';
import { followUser, unfollowUser } from '../../services/userService.js';
import { useAuth } from '../../contexts/authContext';
import toast from 'react-hot-toast';
import { FaUserPlus, FaUserCheck } from 'react-icons/fa';

export default function ExploreUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: currentUser, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/users');
        
        // ✅ If authenticated, also fetch who current user follows
        let followingIds = [];
        if (isAuthenticated && currentUser) {
          try {
            const followingResponse = await apiClient.get(`/users/${currentUser.id}/following`);
            followingIds = followingResponse.data.map(u => u.id);
          } catch (e) {
            console.error('Error fetching following list:', e);
          }
        }

        // ✅ Add isFollowing property to each user
        const usersWithFollowStatus = response.data.map(user => ({
          ...user,
          isFollowing: followingIds.includes(user.id)
        }));

        setUsers(usersWithFollowStatus);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [isAuthenticated, currentUser]);

  const handleFollowToggle = async (userId) => {
    if (!isAuthenticated) {
      toast.error('Please log in to follow users');
      return;
    }

    try {
      const userToUpdate = users.find(u => u.id === userId);
      const isCurrentlyFollowing = userToUpdate.isFollowing;

      if (isCurrentlyFollowing) {
        await unfollowUser(userId);
        toast.success('Unfollowed user');
      } else {
        await followUser(userId);
        toast.success('Following user');
      }

      // Update UI
      setUsers(users.map(user =>
        user.id === userId
          ? { ...user, isFollowing: !isCurrentlyFollowing }
          : user
      ));
    } catch (error) {
      console.error('Error toggling follow:', error);
      toast.error('Failed to update follow status');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Discover Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.filter(u => u.id !== currentUser?.id).map(user => (
          <div key={user.id} className="border rounded-lg p-4 flex flex-col items-center">
            <div className="h-20 w-20 overflow-hidden rounded-full mb-3">
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt={user.username}
                className="h-full w-full object-cover"
              />
            </div>

            <Link href={`/profile/${user.id}`} className="font-bold text-lg hover:underline">
              {user.username}
            </Link>

            {user.name && <p className="text-gray-600 mb-2">{user.name}</p>}

            <button
              onClick={() => handleFollowToggle(user.id)}
              className={`mt-2 rounded-full px-4 py-1 flex items-center ${
                user.isFollowing
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {user.isFollowing ? (
                <>
                  <FaUserCheck className="mr-1" /> Following
                </>
              ) : (
                <>
                  <FaUserPlus className="mr-1" /> Follow
                </>
              )}
            </button>
          </div>
        ))}

        {users.filter(u => u.id !== currentUser?.id).length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}