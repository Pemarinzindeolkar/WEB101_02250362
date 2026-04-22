'use client';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import videoService from '@/services/videoService';
import { useAuth } from '@/contexts/authContext';

export default function VideoFeed({ feedType = 'for-you' }) {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, [feedType]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      let response;
      
      if (feedType === 'following' && user) {
        response = await videoService.getFollowingVideos(cursor);
      } else {
        response = await videoService.getVideos(cursor);
      }
      
      // Make sure response has videos array
      const newVideos = response?.videos || [];
      
      if (cursor) {
        setVideos(prev => [...prev, ...newVideos]);
      } else {
        setVideos(newVideos);
      }
      
      setHasMore(response?.pagination?.hasNextPage || false);
      setCursor(response?.pagination?.nextCursor || null);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleVideoUpdate = (updatedVideo) => {
    setVideos(prev => prev.map(v => v.id === updatedVideo.id ? updatedVideo : v));
  };

  if (loading && videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading videos...</div>
      </div>
    );
  }

  // Safe check - if videos is undefined or null, treat as empty array
  const videoList = videos || [];
  
  if (videoList.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500 text-center">
          <p>No videos yet</p>
          {feedType === 'following' && !user && (
            <p className="text-sm mt-2">Log in to see videos from people you follow</p>
          )}
          {feedType === 'following' && user && (
            <p className="text-sm mt-2">Follow some users to see their videos</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {videoList.map((video) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onUpdate={handleVideoUpdate}
        />
      ))}
      
      {hasMore && (
        <div className="flex justify-center py-8">
          <button
            onClick={fetchVideos}
            disabled={loading}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-gray-500"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}