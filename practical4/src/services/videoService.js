import api from '@/lib/api-config';

const videoService = {
  // Get all videos (For You feed)
  getVideos: async (cursor = null, limit = 10) => {
    try {
      const params = { limit };
      if (cursor) params.cursor = cursor;
      
      // REMOVED /api prefix - baseURL already has it
      const response = await api.get('/videos', { params });
      
      return {
        videos: response.data?.videos || response.data || [],
        pagination: response.data?.pagination || { hasNextPage: false, nextCursor: null }
      };
    } catch (error) {
      console.error('Error fetching videos:', error);
      return {
        videos: [],
        pagination: { hasNextPage: false, nextCursor: null }
      };
    }
  },

  // Get following videos feed
  getFollowingVideos: async (cursor = null, limit = 10) => {
    try {
      const params = { limit };
      if (cursor) params.cursor = cursor;
      
      // REMOVED /api prefix
      const response = await api.get('/videos/following', { params });
      
      return {
        videos: response.data?.videos || response.data || [],
        pagination: response.data?.pagination || { hasNextPage: false, nextCursor: null }
      };
    } catch (error) {
      console.error('Error fetching following videos:', error);
      return {
        videos: [],
        pagination: { hasNextPage: false, nextCursor: null }
      };
    }
  },

  // Get single video by ID
  getVideo: async (videoId) => {
    try {
      // REMOVED /api prefix
      const response = await api.get(`/videos/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video:', error);
      throw error;
    }
  },

  // Like/unlike video
  likeVideo: async (videoId) => {
    try {
      // REMOVED /api prefix
      const response = await api.post(`/videos/${videoId}/like`);
      return response.data;
    } catch (error) {
      console.error('Error liking video:', error);
      throw error;
    }
  },

  // Add comment to video
  addComment: async (videoId, content) => {
    try {
      // REMOVED /api prefix
      const response = await api.post(`/videos/${videoId}/comments`, { content });
      return response.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  // Get video comments
  getComments: async (videoId) => {
    try {
      // REMOVED /api prefix
      const response = await api.get(`/videos/${videoId}/comments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  // Upload video
  uploadVideo: async (formData) => {
    try {
      // REMOVED /api prefix
      const response = await api.post('/videos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading video:', error);
      throw error;
    }
  },

  // Delete video
  deleteVideo: async (videoId) => {
    try {
      // REMOVED /api prefix
      const response = await api.delete(`/videos/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error;
    }
  }
};

export default videoService;