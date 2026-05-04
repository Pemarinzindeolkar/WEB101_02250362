# TikTok-style Web Interface Practical 4

## Project Overview

The project is a full-stack web-based "TikTok-style Web Interface" that I built to demonstrate modern web application development using Next.js for the frontend and Express.js with Supabase for the backend.

---

## Technology Stack

### Frontend:
- Framework: Next.js (React-based)
- Styling: Tailwind CSS
- HTTP Client: Axios
- State Management: React Context API

### Backend:
- Runtime: Node.js with Express.js
- Database & Auth: Supabase
- Port: 5001 (backend), 3000 (frontend)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Pemarinzindeolkar/WEB101_02250362.git
cd practical4
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Configure environment variables

Create `.env.local` in frontend root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

### 5. Start backend server

```bash
npm run dev
```

### 6. Start frontend server

```bash
npm run dev
```

### 7. Open application

Navigate to http://localhost:3000

---

## State Management

Used React's built-in useState, useEffect, and Context API for component state management.

---

## Key Components

### MainLayout Component
Provides the sidebar navigation and header structure that persists across all pages.

### VideoCard Component
Reusable component that displays individual video content with user information and interaction buttons.

### VideoFeed Component
Manages and displays a collection of VideoCard components in a scrollable feed.

### Login/Signup Forms
Implements form validation using React Hook Form for user authentication.

---

## Authentication Flow

**Note:** Unlike the initial frontend-only version, this application now includes complete backend authentication.

1. Registration: User submits email, username, password → Backend hashes password → Creates user → Returns JWT token

2. Login: User submits email and password → Backend verifies credentials → Returns JWT token

3. Session Persistence: Frontend checks localStorage for existing token → Validates with backend

4. Authenticated Requests: Axios interceptor automatically attaches JWT token to every request

---

## Features Implemented

### Layout & Navigation
Implemented complete layout structure with sidebar navigation using Next.js file-based routing.

### Video Feed Display
Created reusable VideoCard and VideoFeed components to fetch and display real video content.

### Multiple Pages
Created seven different pages (For You, Following, Explore, Live, Upload, Profile).

### Real Authentication
Implemented login/signup forms connected to Express.js backend with JWT tokens.

### Video Interactions
- Like/unlike videos with optimistic UI updates
- View and add comments to videos

### Follow/Unfollow Functionality
- Discover users on Explore page
- Follow/unfollow with one click
- Personalized "Following" feed

### Dynamic Profile Pages
- Dynamic routes (/profile/[userId])
- Display user's uploaded videos

### Video Upload
- Authenticated users can upload videos with captions
- Upload progress tracking using Axios

---


## Known Challenges & Solutions

### Challenge 1: CORS and Network Errors
**Issue:** Frontend couldn't communicate with backend due to port mismatch.
**Solution:** Configured CORS in Express backend and created centralized Axios instance.

### Challenge 2: JWT Token Management
**Issue:** Manually attaching tokens to every request was repetitive.
**Solution:** Implemented Axios request interceptor for automatic token attachment.

### Challenge 3: 404 Route Not Found
**Issue:** Frontend called /auth/login but backend expected /api/auth/login.
**Solution:** Standardized API paths with /api prefix in baseURL.

### Challenge 4: 401 Unauthorized on Login
**Issue:** Login returned 401 because no users existed in database.
**Solution:** Registered a user first using signup form, then logged in successfully.

### Challenge 5: Optimistic UI Updates for Likes
**Issue:** Like button felt laggy when waiting for API response.
**Solution:** Implemented optimistic updates - increments immediately, reverts only on failure.

---

## Notes

- The application uses Tailwind CSS for styling; no custom CSS files were written
- Video data is stored in Supabase and served through the Express backend
- Authentication uses JWT tokens stored in localStorage
- Both frontend (port 3000) and backend (port 5001) must be running simultaneously

---

## Future Improvements

- Add infinite scroll pagination for video feeds
- Implement video comments section with nested replies
- Add user search functionality
- Implement edit profile page
- Deploy to production (Vercel + Railway/Supabase)

---

## References

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com
- Axios: https://axios-http.com
- Express.js: https://expressjs.com
- Supabase: https://supabase.com/docs
- JWT: https://jwt.io
```