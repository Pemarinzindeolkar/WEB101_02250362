'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/authContext';
import { uploadVideoToStorage, uploadThumbnailToStorage, createVideo } from '../../services/uploadService';
import toast from 'react-hot-toast';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';

const UploadPage = () => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const videoInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  // ✅ Fixed - redirect inside useEffect
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error('Please select a video file');
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      toast.error('File size too large (max 100MB)');
      return;
    }

    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file for the thumbnail');
      return;
    }

    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile) {
      toast.error('Please select a video to upload');
      return;
    }

    if (!caption.trim()) {
      toast.error('Please add a caption');
      return;
    }

    try {
      setUploading(true);
      setUploadProgress(0);

      const uploadToast = toast.loading('Uploading video... 0%');

      const videoUploadResult = await uploadVideoToStorage(user.id, videoFile);
      setUploadProgress(50);
      toast.loading('Uploading video... 50%', { id: uploadToast });

      let thumbnailUploadResult = null;
      if (thumbnailFile) {
        thumbnailUploadResult = await uploadThumbnailToStorage(user.id, thumbnailFile);
      }

      setUploadProgress(75);
      toast.loading('Uploading video... 75%', { id: uploadToast });

      const videoData = {
        caption,
        videoUrl: videoUploadResult.url,
        videoStoragePath: videoUploadResult.storagePath,
      };

      if (thumbnailUploadResult) {
        videoData.thumbnailUrl = thumbnailUploadResult.url;
        videoData.thumbnailStoragePath = thumbnailUploadResult.storagePath;
      }

      await createVideo(videoData);

      setUploadProgress(100);
      toast.success('Video uploaded successfully!', { id: uploadToast });
      router.push('/');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Failed to upload video');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Upload Video</h1>

      <div className="rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video upload area */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-2">Video</h2>
              {videoPreview ? (
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-black">
                  <video
                    src={videoPreview}
                    className="h-full w-full object-contain"
                    controls
                  />
                </div>
              ) : (
                <div
                  onClick={() => videoInputRef.current?.click()}
                  className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  <FaCloudUploadAlt size={48} className="mb-2 text-gray-400" />
                  <p className="text-center text-gray-500">
                    Click to upload a video
                    <br />
                    <span className="text-sm">MP4 or WebM (max 100MB)</span>
                  </p>
                </div>
              )}
              <input
                type="file"
                ref={videoInputRef}
                onChange={handleVideoChange}
                accept="video/*"
                className="hidden"
              />
              {videoFile && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected: {videoFile.name}
                </p>
              )}

              {/* Thumbnail upload area */}
              <h2 className="text-lg font-semibold mb-2 mt-6">Thumbnail (Optional)</h2>
              {thumbnailPreview ? (
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div
                  onClick={() => thumbnailInputRef.current?.click()}
                  className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  <FaCloudUploadAlt size={36} className="mb-2 text-gray-400" />
                  <p className="text-center text-gray-500">
                    Click to upload a thumbnail
                    <br />
                    <span className="text-sm">JPG, PNG or GIF</span>
                  </p>
                </div>
              )}
              <input
                type="file"
                ref={thumbnailInputRef}
                onChange={handleThumbnailChange}
                accept="image/*"
                className="hidden"
              />
              {thumbnailFile && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected: {thumbnailFile.name}
                </p>
              )}
            </div>

            {/* Video details */}
            <div>
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Caption
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2"
                  rows="4"
                  placeholder="What's this video about?"
                  maxLength="150"
                ></textarea>
                <p className="mt-1 text-right text-xs text-gray-500">
                  {caption.length}/150
                </p>
              </div>

              {uploading && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-center text-xs text-gray-500">
                    Uploading: {uploadProgress}%
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={uploading || !videoFile}
                className="w-full rounded-lg bg-blue-500 py-3 text-white hover:bg-blue-600 disabled:bg-blue-300"
              >
                {uploading ? (
                  <span className="flex items-center justify-center">
                    <FaSpinner className="mr-2 animate-spin" /> Uploading...
                  </span>
                ) : (
                  'Post'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;