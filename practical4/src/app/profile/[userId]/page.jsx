'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import userService from '@/services/userService';
import videoService from '@/services/videoService';
import { useAuth } from '@/contexts/authContext';
import VideoCard from '@/components/ui/VideoCard';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [profileUser, setProfileUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('videos');

  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const fetchProfile = async () => {
    try {
      const userData = await userService.getUser(userId);
      setProfileUser(userData);
      setIsFollowing(userData.isFollowing || false);
      
      const videosData = await userService.getUserVideos(userId);
      setVideos(videosData.videos || []);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleFollow = async () => {
    if (!currentUser) {
      toast.error('Please login to follow');
      return;
    }

    try {
      if (isFollowing) {
        await userService.unfollowUser(userId);
        setIsFollowing(false);
        setProfileUser(prev => ({ ...prev, followerCount: (prev.followerCount || 0) - 1 }));
        toast.success('Unfollowed');
      } else {
        await userService.followUser(userId);
        setIsFollowing(true);
        setProfileUser(prev => ({ ...prev, followerCount: (prev.followerCount || 0) + 1 }));
        toast.success('Followed');
      }
    } catch (error) {
      toast.error('Action failed');
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading profile...</div>;
  }

  if (!profileUser) {
    return <div className="flex justify-center items-center h-64">User not found</div>;
  }

  const isOwnProfile = currentUser?.id === profileUser.id;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white border rounded-lg p-6 mb-6">
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white text-3xl font-bold">
            {profileUser.username?.[0]?.toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold">@{profileUser.username}</h1>
              {!isOwnProfile && currentUser && (
                <button
                  onClick={handleFollow}
                  className={`px-4 py-1 rounded-md ${
                    isFollowing
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              )}
            </div>
            <div className="flex gap-6 text-sm">
              <span><strong>{videos.length}</strong> videos</span>
              <span><strong>{profileUser.followerCount || 0}</strong> followers</span>
              <span><strong>{profileUser.followingCount || 0}</strong> following</span>
            </div>
            {profileUser.bio && (
              <p className="text-gray-600 mt-2">{profileUser.bio}</p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('videos')}
            className={`pb-2 px-1 ${
              activeTab === 'videos'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'text-gray-500'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`pb-2 px-1 ${
              activeTab === 'liked'
                ? 'border-b-2 border-red-500 text-red-500'
                : 'text-gray-500'
            }`}
          >
            Liked Videos
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      {activeTab === 'videos' && (
        <div>
          {videos.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No videos yet
            </div>
          ) : (
            videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          )}
        </div>
      )}

      {activeTab === 'liked' && (
        <div className="text-center text-gray-500 py-12">
          Liked videos coming soon
        </div>
      )}
    </div>
  );
}