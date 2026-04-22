'use client';
import { useState } from 'react';
import Link from "next/link";
import {
    FaHome, FaUserFriends, FaCompass, FaVideo,
    FaInbox, FaRegUser, FaPlus, FaSearch
} from 'react-icons/fa';
import { useAuth } from '@/contexts/authContext';
import AuthModal from '@/components/auth/AuthModal';

export default function MainLayout({ children }) {
    const { user, logout } = useAuth();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const handleAuthClick = (mode) => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */} 
            <div className="w-60 border-r fixed h-full overflow-y-auto bg-white">
                <div className="p-4">
                    <Link href="/" className="text-xl font-bold flex items-center">
                        <span className="text-red-500 mr-1">TikTok</span>
                        <span className="text-black">Clone</span>
                    </Link>
                </div>

                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                                <FaHome className="text-xl mr-3" />
                                <span>For You</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/following" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                                <FaUserFriends className="text-xl mr-3" />
                                <span>Following</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/explore" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                                <FaCompass className="text-xl mr-3" />
                                <span>Explore</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/live" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                                <FaVideo className="text-xl mr-3" />
                                <span>LIVE</span>
                            </Link>
                        </li>
                        
                        {/* UPLOAD BUTTON IN SIDEBAR - Only shows when logged in */}
                        {user && (
                            <li>
                                <Link href="/upload" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                                    <FaPlus className="text-xl mr-3 text-red-500" />
                                    <span className="text-red-500">Upload</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Suggested accounts section - only show if user is logged in */}
                {user && (
                    <div className="border-t mt-4 pt-4 px-2">
                        <p className="text-gray-500 text-sm px-3 mb-2">Suggested accounts</p>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                                <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                                <div>
                                    <p className="text-sm font-semibold">user_{index + 1}</p>
                                    <p className="text-xs text-gray-500">User {index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Auth section in sidebar - only show if NOT logged in */}
                {!user && (
                    <div className="px-3 py-4 mt-2">
                        <p className="text-sm text-gray-500 mb-4">
                            Log in to follow creators, like videos, and view comments.
                        </p>
                        
                        <button 
                            onClick={() => handleAuthClick('login')}
                            className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 mb-2"
                        >
                            Log in
                        </button>

                        <button 
                            onClick={() => handleAuthClick('signup')}
                            className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300"
                        >
                            Sign up
                        </button>
                    </div>
                )}

                {/* User info in sidebar - show when logged in */}
                {user && (
                    <div className="border-t px-3 py-4 mt-2">
                        <div className="flex items-center mb-3">
                            <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                            <div>
                                <p className="text-sm font-semibold">{user.username}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <button 
                            onClick={logout}
                            className="w-full py-2 px-4 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                )}

                <div className="border-t px-3 py-4 text-xs text-gray-500">
                    <p className="mb-2">© 2025 TikTok Clone</p>
                </div>
            </div>

            {/* Main content */}
            <div className="ml-60 flex-1">
                <div className="max-w-[1150px] mx-auto">
                    {/* Header */}
                    <header className="h-16 border-b flex items-center justify-between px-4 bg-white">
                        <div className="w-1/3"></div>
                        <div className="w-1/3">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search accounts and videos"
                                    className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="w-1/3 flex justify-end space-x-4">
                            {user && (
                                <Link href="/upload">
                                    <button className="border px-3 py-1 rounded-md hover:bg-gray-50 flex items-center">
                                        <FaPlus className="mr-2" /> Upload
                                    </button>
                                </Link>
                            )}
                            
                            {!user ? (
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleAuthClick('login')}
                                        className="bg-red-500 text-white px-6 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Log in
                                    </button>
                                    <button 
                                        onClick={() => handleAuthClick('signup')}
                                        className="border border-red-500 text-red-500 px-6 py-1 rounded-md hover:bg-red-50"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            ) : (
                                <Link href="/profile">
                                    <button className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                                        <FaRegUser className="text-xl mr-2" />
                                        <span>Profile</span>
                                    </button>
                                </Link>
                            )}
                        </div>
                    </header>

                    {/* Main content */}
                    <main>{children}</main>
                </div>
            </div>

            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                initialMode={authMode}
            />
        </div>
    );
}