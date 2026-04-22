'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';
import api from '@/lib/api-config';
import toast from 'react-hot-toast';

export default function UploadPage() {
    const { user } = useAuth();
    const router = useRouter();
    const fileInputRef = useRef(null);
    
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [caption, setCaption] = useState('');
    const [visibility, setVisibility] = useState('public');
    const [allowComments, setAllowComments] = useState(true);
    const [allowDuet, setAllowDuet] = useState(true);
    const [allowStitch, setAllowStitch] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Redirect if not logged in
    if (typeof window !== 'undefined' && !user) {
        router.push('/');
        toast.error('Please login to upload videos');
        return null;
    }

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('video/')) {
            toast.error('Please select a valid video file');
            return;
        }

        // Validate file size (2GB max)
        if (file.size > 2 * 1024 * 1024 * 1024) {
            toast.error('Video must be less than 2GB');
            return;
        }

        setVideoFile(file);
        
        // Create preview URL
        const previewUrl = URL.createObjectURL(file);
        setVideoPreview(previewUrl);
    };

    const handleUpload = async () => {
        if (!videoFile) {
            toast.error('Please select a video file');
            return;
        }

        if (!caption.trim()) {
            toast.error('Please add a caption');
            return;
        }

        setUploading(true);
        
        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('caption', caption);
        formData.append('visibility', visibility);
        formData.append('allowComments', allowComments);
        formData.append('allowDuet', allowDuet);
        formData.append('allowStitch', allowStitch);

        try {
            const response = await api.post('/api/videos/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(`Upload progress: ${percentCompleted}%`);
                },
            });

            toast.success('Video uploaded successfully!');
            
            // Clear preview URL
            if (videoPreview) {
                URL.revokeObjectURL(videoPreview);
            }
            
            // Redirect to the video page or home
            setTimeout(() => {
                router.push(`/video/${response.data.video.id}`);
            }, 1500);
            
        } catch (error) {
            console.error('Upload error:', error);
            toast.error(error.response?.data?.message || 'Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleDiscard = () => {
        if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
        }
        setVideoFile(null);
        setVideoPreview(null);
        setCaption('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Upload video</h1>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left side - Video upload area */}
                <div className="w-full md:w-[360px]">
                    {!videoPreview ? (
                        <div 
                            className="border-dashed border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                <span className="text-4xl text-gray-400">+</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Select video to upload</h3>
                            <p className="text-sm text-gray-500 mb-4">Or drag and drop a file</p>
                            <p className="text-xs text-gray-400 mb-4">MP4 or WebM</p>
                            <p className="text-xs text-gray-400 mb-4">720x1280 resolution or higher</p>
                            <p className="text-xs text-gray-400 mb-4">Up to 10 minutes</p>
                            <p className="text-xs text-gray-400">Less than 2 GB</p>
                            <button 
                                type="button"
                                className="mt-8 bg-red-500 text-white py-2 px-8 rounded-md hover:bg-red-600 transition-colors"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Select file
                            </button>
                        </div>
                    ) : (
                        <div className="border rounded-lg overflow-hidden bg-black">
                            <video 
                                src={videoPreview} 
                                className="w-full aspect-[9/16] object-contain"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                            <button
                                onClick={handleDiscard}
                                className="w-full mt-2 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
                            >
                                Remove video
                            </button>
                        </div>
                    )}
                    
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                    />
                </div>

                {/* Right side - Video details form */}
                <div className="flex-1">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Caption</label>
                        <textarea
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            rows="3"
                            placeholder="Add a caption..."
                            maxLength="150"
                        />
                        <p className="text-xs text-gray-400 mt-1">{caption.length}/150</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Cover</label>
                        {videoPreview ? (
                            <video 
                                src={videoPreview} 
                                className="h-20 w-auto object-cover rounded-md"
                                muted
                            />
                        ) : (
                            <div className="h-20 bg-gray-200 rounded-md"></div>
                        )}
                        <button className="text-sm text-red-500 mt-1 hover:underline">
                            Edit cover
                        </button>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Who can view this video
                        </label>
                        <select 
                            value={visibility}
                            onChange={(e) => setVisibility(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="public">Public</option>
                            <option value="friends">Friends</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Allow users to:
                        </label>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="comments" 
                                    checked={allowComments}
                                    onChange={(e) => setAllowComments(e.target.checked)}
                                    className="mr-2 w-4 h-4"
                                />
                                <label htmlFor="comments" className="text-sm">Comment</label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="duet" 
                                    checked={allowDuet}
                                    onChange={(e) => setAllowDuet(e.target.checked)}
                                    className="mr-2 w-4 h-4"
                                />
                                <label htmlFor="duet" className="text-sm">Duet</label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="stitch" 
                                    checked={allowStitch}
                                    onChange={(e) => setAllowStitch(e.target.checked)}
                                    className="mr-2 w-4 h-4"
                                />
                                <label htmlFor="stitch" className="text-sm">Stitch</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-6">
                        <button 
                            onClick={handleDiscard}
                            className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Discard
                        </button>
                        <button 
                            onClick={handleUpload}
                            disabled={uploading || !videoFile}
                            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                            {uploading ? 'Uploading...' : 'Post'}
                        </button>
                    </div>

                    {uploading && (
                        <div className="mt-4">
                            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div className="bg-red-500 h-full rounded-full animate-pulse" style={{ width: '50%' }}></div>
                            </div>
                            <p className="text-sm text-gray-500 text-center mt-2">Uploading video...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}