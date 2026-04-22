import api from '@/lib/api-config';

const videoService = {
  // Get all videos (For You feed)
  getVideos: async (cursor = null, limit = 10) => {
    try {
      const params = { limit };
      if (cursor) params.cursor = cursor;
      
      const response = await api.get('/api/videos', { params });
      // Return a consistent structure even if no data
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
      
      const response = await api.get('/api/videos/following', { params });
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
      const response = await api.get(`/api/videos/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video:', error);
      throw error;
    }
  },

  // Like/unlike video
  likeVideo: async (videoId) => {
    try {
      const response = await api.post(`/api/videos/${videoId}/like`);
      return response.data;
    } catch (error) {
      console.error('Error liking video:', error);
      throw error;
    }
  },

  // Add comment to video
  addComment: async (videoId, content) => {
    try {
      const response = await api.post(`/api/videos/${videoId}/comments`, { content });
      return response.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  // Get video comments
  getComments: async (videoId) => {
    try {
      const response = await api.get(`/api/videos/${videoId}/comments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  // Upload video
  uploadVideo: async (formData) => {
    try {
      const response = await api.post('/api/videos/upload', formData, {
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
      const response = await api.delete(`/api/videos/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting video:', error);
      throw error;
    }
  }
};

export default videoService;