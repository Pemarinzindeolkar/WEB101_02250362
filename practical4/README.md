TikTok-style Web Interface
Project Overview
The project is a basic web-based "TikTok-style Web Interface" that I built to demonstrate modern web application development using Next.js and Tailwind CSS. This project enables users to view a video feed, navigate between different pages (For You, Following, Explore, Live, Upload, Profile), and includes login/signup functionality with form validation. This project uses component-based architecture and offers an organized way of building scalable web interfaces.

Technology Stack
Framework: Next.js (React-based)

Styling: Tailwind CSS (Utility-first CSS framework)

Icons: React Icons

Form Handling: React Hook Form

Language: JavaScript/JSX

Setup Instructions
Clone the repository

bash
git clone https://github.com/Pemarinzindeolkar/WEB101_02250362.git
Navigate to the project directory

bash
cd practical1
Install dependencies

bash
npm install
Start development server

bash
npm run dev
Open the application
Navigate to http://localhost:3000 in your browser

State Management:
Used React's built-in useState and props for component state management

Key Components
MainLayout Component:
Provides the sidebar navigation and header structure that persists across all pages

VideoCard Component:
Reusable component that displays individual video content with user information and interaction buttons

VideoFeed Component:
Manages and displays a collection of VideoCard components in a scrollable feed

Login/Signup Forms:
Implements form validation using React Hook Form for user authentication

Authentication Flow
This application includes basic login and signup pages with form validation. The authentication flow demonstrates:
Email validation using regular expressions
Password strength validation
Confirm password matching
Form submission handling with error messages

Note: This is a front-end demonstration only; no backend authentication is implemented.

Features Implemented
Layout & Navigation (GET-style routing):
I have implemented a complete layout structure with sidebar navigation that allows users to navigate between different pages using Next.js file-based routing.

Video Feed Display:
I have created reusable VideoCard and VideoFeed components to display video content in a TikTok-style scrolling feed on the main page.

Multiple Pages:
I have created six different pages (Following, Explore, Live, Upload, Profile) each with unique content and layout integration.

Form Validation (Login/Signup):
I have implemented login and signup forms with comprehensive validation using React Hook Form, including email format validation, password strength checking, and error message display.

Notes
The application uses Tailwind CSS for styling; no custom CSS files were written
Video data is currently using placeholder/demo content as this is a front-end interface demonstration
The login/signup functionality demonstrates form validation only and does not connect to a real authentication backend
All components are reusable and follow the component-based architecture principles of React
