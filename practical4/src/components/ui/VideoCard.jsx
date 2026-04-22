'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaHeart, FaRegHeart, FaComment, 
  FaShare, FaMusic, FaBookmark, FaRegBookmark
} from 'react-icons/fa';
import videoService from '@/services/videoService';
import { useAuth } from '@/contexts/authContext';
import toast from 'react-hot-toast';

export default function VideoCard({ video, onUpdate }) {
  const { user } = useAuth();
  const [liked, setLiked] = useState(video?.isLiked || false);
  const [likesCount, setLikesCount] = useState(video?.likeCount || 0);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = async () => {
    if (!user) {
      toast.error('Please login to like videos');
      return;
    }

    try {
      const result = await videoService.likeVideo(video.id);
      setLiked(result.liked);
      setLikesCount(prev => result.liked ? prev + 1 : prev - 1);
      
      if (onUpdate) {
        onUpdate({ ...video, isLiked: result.liked, likeCount: result.liked ? likesCount + 1 : likesCount - 1 });
      }
    } catch (error) {
      toast.error('Failed to like video');
    }
  };

  return (
    <div className="flex py-6 border-b border-gray-800">
      {/* User avatar */}
      <Link href={`/profile/${video.user?.id}`}>
        <div className="mr-3 cursor-pointer">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white font-bold">
            {video.user?.username?.[0]?.toUpperCase() || 'U'}
          </div>
        </div>
      </Link>

      <div className="flex-1">
        {/* User info and caption */}
        <div className="mb-2">
          <Link href={`/profile/${video.user?.id}`}>
            <span className="font-semibold text-white hover:underline cursor-pointer">
              @{video.user?.username}
            </span>
          </Link>
          <span className="text-gray-400 text-sm ml-2">
            {new Date(video.createdAt).toLocaleDateString()}
          </span>
          <p className="text-white text-sm mt-1">{video.title}</p>
        </div>

        {/* Audio info */}
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <FaMusic className="mr-2 text-xs" />
          <span className="truncate max-w-[250px]">Original Audio</span>
        </div>

        <div className="flex">
          {/* Video container */}
          <div className="mr-5 w-[300px] h-[530px] bg-black rounded-md flex items-center justify-center relative overflow-hidden cursor-pointer">
            <video 
              src={`http://localhost:8000${video.url}`}
              className="w-full h-full object-contain"
              controls
              poster={video.thumbnail}
            />
          </div>
          
          {/* Interaction buttons */}
          <div className="flex flex-col justify-end space-y-4 py-2">
            {/* Like button */}
            <button className="flex flex-col items-center group" onClick={handleLike}>
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                {liked ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-white text-xl" />
                )}
              </div>
              <span className="text-white text-xs mt-1">{likesCount}</span>
            </button>

            {/* Comment button */}
            <button 
              className="flex flex-col items-center group"
              onClick={() => setShowComments(!showComments)}
            >
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <FaComment className="text-white text-xl" />
              </div>
              <span className="text-white text-xs mt-1">{video.commentCount || 0}</span>
            </button>

            {/* Share button */}
            <button className="flex flex-col items-center group">
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <FaShare className="text-white text-xl" />
              </div>
              <span className="text-white text-xs mt-1">{video.shareCount || 0}</span>
            </button>

            {/* Save button */}
            <button 
              className="flex flex-col items-center group"
              onClick={() => setSaved(!saved)}
            >
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                {saved ? (
                  <FaBookmark className="text-yellow-500 text-xl" />
                ) : (
                  <FaRegBookmark className="text-white text-xl" />
                )}
              </div>
              <span className="text-white text-xs mt-1">Save</span>
            </button>
          </div>
        </div>

        {/* Comments section */}
        {showComments && (
          <div className="mt-4 pl-4 border-l-2 border-gray-700">
            <h4 className="text-white font-semibold mb-2">Comments</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {video.comments?.map((comment) => (
                <div key={comment.id} className="flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-600"></div>
                  <div>
                    <p className="text-white text-sm">
                      <span className="font-semibold">@{comment.user?.username}</span> {comment.content}
                    </p>
                  </div>
                </div>
              ))}
              {(!video.comments || video.comments.length === 0) && (
                <p className="text-gray-400 text-sm">No comments yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}