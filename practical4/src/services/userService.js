import api from '@/lib/api-config';

const userService = {
  // Get current user profile
  getCurrentUser: async () => {
    try {
      const response = await api.get('/api/users/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  },

  // Get user by ID
  getUser: async (userId) => {
    try {
      const response = await api.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  // Update user profile
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/api/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  // Follow user
  followUser: async (userId) => {
    try {
      const response = await api.post(`/api/users/${userId}/follow`);
      return response.data;
    } catch (error) {
      console.error('Error following user:', error);
      throw error;
    }
  },

  // Unfollow user
  unfollowUser: async (userId) => {
    try {
      const response = await api.delete(`/api/users/${userId}/follow`);
      return response.data;
    } catch (error) {
      console.error('Error unfollowing user:', error);
      throw error;
    }
  },

  // Get user's followers
  getFollowers: async (userId) => {
    try {
      const response = await api.get(`/api/users/${userId}/followers`);
      return response.data;
    } catch (error) {
      console.error('Error fetching followers:', error);
      throw error;
    }
  },

  // Get users that a user is following
  getFollowing: async (userId) => {
    try {
      const response = await api.get(`/api/users/${userId}/following`);
      return response.data;
    } catch (error) {
      console.error('Error fetching following:', error);
      throw error;
    }
  },

  // Get user's videos
  getUserVideos: async (userId, cursor = null, limit = 100) => {
    try {
      const params = { limit };
      if (cursor) params.cursor = cursor;
      
      const response = await api.get(`/api/users/${userId}/videos`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching user videos:', error);
      throw error;
    }
  },

  // Search users
  searchUsers: async (query) => {
    try {
      const response = await api.get(`/api/users/search?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error searching users:', error);
      throw error;
    }
  },

  // Get suggested users
  getSuggestedUsers: async (limit = 100) => {
    try {
      const response = await api.get(`/api/users/suggested?limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching suggested users:', error);
      throw error;
    }
  }
};

export default userService;