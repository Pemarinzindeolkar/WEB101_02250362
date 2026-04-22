Weather API Dashboard

Project Overview

The project is a basic web-based "Weather API Dashboard" that I built to show an example of working with RESTful APIs. This project will enable users to retrieve real-time weather information and manipulate saved locations using GET, POST, PUT, and DELETE methods. This project uses external APIs and offers an organized way of working with these APIs.

---

Technology Stack
State Management:JavaScript variables
Styling: CSS (inline CSS within HTML code)
Form Handling: HTML native forms with JavaScript event listeners
Data Fetching:Fetch API

---

Setup Instructions

1. Clone the repository
git clone https://github.com/Pemarinzindeolkar/WEB101_02250362.git

2. Install dependencies
npm install

3. Start development server
npm run dev

4. Open the application
Open `index.html` in your browser

Application Structure

Application Pages/Routes:

  - Single-page application with tabbed navigation for API operations

---

Component Organization:

  - Organized into sections:
    - Weather (GET)
    - Save Location (POST)
    - Edit (PUT)
    - Delete (DELETE)
    
---

State Management:

  - Used an array `savedLocations` to manage and update data in the application dynamically

---

Key Components

Weather Form:

   Allows users to enter a city and fetch real-time weather data

Location Manager:

  Handles saving, editing, and deleting locations using API requests

---

Authentication Flow

This application does not include user authentication. However, it uses an API key from OpenWeatherMap to access weather data securely.

---

Features Implemented

Fetch Weather Data (GET):
  I have implemented a feature that fetches real-time weather data based on user-defined city names using the OpenWeatherMap API.

Save Locations (POST):
  I have used the JSONPlaceholder API to simulate the feature of saving user-defined locations with extra details.

Update & Delete Locations (PUT & DELETE):
  I have implemented the features of editing and deleting user-defined locations.

---

Notes

The application uses a public API key, which must be replaced with a valid key.
JSONPlaceholder is used for demonstration purposes and does not persist data permanently.

---
