"use client";

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import VideoCard from './VideoCard';
import { getVideos, getFollowingVideos } from '../../services/videoService';
import toast from 'react-hot-toast';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useAuth } from '../../contexts/authContext';


const VideoFeed = ({ feedType = 'forYou' }) => {
  const { isAuthenticated } = useAuth();
  const [loadMoreRef, isLoadMoreVisible] = useIntersectionObserver();

  // Query key includes the feed type to cache separately
  const queryKey = ['videos', feedType];
  
  // Select the appropriate fetch function based on feed type
  const fetchFn = feedType === 'following' ? getFollowingVideos : getVideos;
  
  // Set up infinite query
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchFn({ cursor: pageParam }),
    initialPageParam: null, // Start with no cursor
    getNextPageParam: (lastPage) => lastPage.pagination.nextCursor,
    enabled: feedType !== 'following' || isAuthenticated, // Don't fetch following feed if not authenticated
  });

  // Load more when the load more element becomes visible
  useEffect(() => {
    if (isLoadMoreVisible && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isLoadMoreVisible, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Handle errors with toast
  useEffect(() => {
    if (error) {
      toast.error('Failed to load videos. Please try again.');
      console.error('Error loading videos:', error);
    }
  }, [error]);

  // Show loading state
  if (status === 'pending' && !data) {
    return (
      <div className="flex justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  // Show error state
  if (status === 'error' && !data) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Failed to load videos</p>
        <button
          onClick={() => fetchNextPage({ cancelRefetch: true })}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Show empty state for following feed
  if (feedType === 'following' && data?.pages[0]?.videos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">
          You're not following anyone yet or the users you follow haven't posted any videos.
        </p>
      </div>
    );
  }

  // Flatten all pages of videos
  const videos = data?.pages.flatMap((page) => page.videos) || [];

  if (videos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No videos found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Render all videos */}
      {videos.map((video, index) => (
  <VideoCard key={`${video.id}-${index}`} video={video} />
))}
      
      {/* Loading indicator for next page */}
      {isFetchingNextPage && (
        <div className="flex justify-center py-5">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      
      {/* Load more trigger element */}
      {hasNextPage && !isFetchingNextPage && (
        <div ref={loadMoreRef} className="h-20" />
      )}
      
      {/* End of feed message */}
      {!hasNextPage && videos.length > 0 && (
        <div className="text-center py-5 text-gray-500">
          You've reached the end of the feed.
        </div>
      )}
    </div>
  );
};

export default VideoFeed;