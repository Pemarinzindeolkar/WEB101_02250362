'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import userService from '@/services/userService';
import { useAuth } from '@/contexts/authContext';
import toast from 'react-hot-toast';

export default function ExploreUsersPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchSuggestedUsers();
  }, []);

  const fetchSuggestedUsers = async () => {
    try {
      const data = await userService.getSuggestedUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchSuggestedUsers();
      return;
    }
    
    setLoading(true);
    try {
      const results = await userService.searchUsers(searchQuery);
      setUsers(results);
    } catch (error) {
      toast.error('Search failed');
    } finally {
      setLoading(false);
    }
  };

  const handleFollow = async (userId) => {
    if (!user) {
      toast.error('Please login to follow users');
      return;
    }

    try {
      await userService.followUser(userId);
      setUsers(prev => prev.map(u => 
        u.id === userId ? { ...u, isFollowing: true, followerCount: (u.followerCount || 0) + 1 } : u
      ));
      toast.success('Followed!');
    } catch (error) {
      toast.error('Failed to follow');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading users...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Discover Users</h1>
      
      {/* Search Bar */}
      <div className="mb-8 flex gap-2">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Search
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((userItem) => (
          <div key={userItem.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link href={`/profile/${userItem.id}`}>
              <div className="flex items-center mb-3 cursor-pointer">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                  {userItem.username?.[0]?.toUpperCase()}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">@{userItem.username}</h3>
                  <p className="text-sm text-gray-500">{userItem.followerCount || 0} followers</p>
                </div>
              </div>
            </Link>
            <button
              onClick={() => handleFollow(userItem.id)}
              disabled={userItem.id === user?.id}
              className={`w-full py-2 rounded-md transition-colors ${
                userItem.isFollowing
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-red-500 text-white hover:bg-red-600'
              } ${userItem.id === user?.id ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {userItem.id === user?.id ? 'You' : (userItem.isFollowing ? 'Following' : 'Follow')}
            </button>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No users found
        </div>
      )}
    </div>
  );
}