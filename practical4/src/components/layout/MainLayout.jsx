"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../contexts/authContext";
import AuthModal from "../auth/AuthModal";
import {
  FaHome,
  FaCompass,
  FaVideo,
  FaUsers,
  FaPlusCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 flex h-full w-64 flex-col border-r bg-white p-4">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold text-blue-500">
            TikTok
          </Link>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`flex items-center rounded-lg p-2 ${
                  pathname === "/"
                    ? "bg-blue-50 text-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaHome className="mr-3" /> For You
              </Link>
            </li>
            <li>
              <Link
                href="/following"
                className={`flex items-center rounded-lg p-2 ${
                  pathname === "/following"
                    ? "bg-blue-50 text-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaUsers className="mr-3" /> Following
              </Link>
            </li>
            <li>
                <Link
                  href="/explore-users"
                  className={`flex items-center rounded-lg p-2 ${
                    pathname === "/explore-users"
                      ? "bg-blue-50 text-blue-500"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaUsers className="mr-3" /> Find Users
                </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className={`flex items-center rounded-lg p-2 ${
                  pathname === "/explore"
                    ? "bg-blue-50 text-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaCompass className="mr-3" /> Explore
              </Link>
            </li>
            <li>
              <Link
                href="/live"
                className={`flex items-center rounded-lg p-2 ${
                  pathname === "/live"
                    ? "bg-blue-50 text-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <FaVideo className="mr-3" /> LIVE
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          {isAuthenticated ? (
            <>
              <Link
                href="/upload"
                className="mb-4 flex w-full items-center justify-center rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
              >
                <FaPlusCircle className="mr-2" /> Upload
              </Link>
              <Link
                href={`/profile/${user?.id}`}
                className="mb-2 flex items-center rounded-lg p-2 hover:bg-gray-100"
              >
                <FaUser className="mr-3" /> Profile
              </Link>
              <button
                onClick={logout}
                className="flex w-full items-center rounded-lg p-2 hover:bg-gray-100"
              >
                <FaSignOutAlt className="mr-3" /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex w-full items-center justify-center rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
            >
              Log in
            </button>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 flex-1 p-8">{children}</div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default MainLayout;