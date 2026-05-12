"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[400px] border p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-2 rounded"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mt-3 mb-2 rounded"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 mt-4 rounded"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {success && (
            <p className="text-green-500 text-center mt-3">
              Login successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
