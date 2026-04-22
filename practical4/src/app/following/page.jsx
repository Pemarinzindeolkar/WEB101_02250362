'use client';
import { useAuth } from '@/contexts/authContext';
import VideoFeed from '@/components/ui/VideoFeed';

export default function FollowingPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <p className="text-gray-500">Please log in to see videos from people you follow</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Following</h1>
      <VideoFeed feedType="following" />
    </div>
  );
}