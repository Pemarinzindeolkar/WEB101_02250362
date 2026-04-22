'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    // In a real app, you would call an authentication API here
    console.log('Login data:', data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful (demo only)');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Log in to TikTok</h1>
          <p className="text-gray-500 mt-2">
            Manage your account, check notifications, comment on videos, and more
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('email', {
                  required: 'Email or username is required',
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4 text-right">
              <Link
                href="/reset-password"
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>

          </form>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-red-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}