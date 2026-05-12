import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'http://localhost:5001/api'; // Adjust port to yours

// Create main API instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptors for adding authorization
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle token expiration
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            // Optionally, redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
