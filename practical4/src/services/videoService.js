import apiClient from '../lib/api-config';


//uses cursor-based pagination
export const getVideos = async ({ cursor, limit = 10 }) => {
  try {
    // Build query string with cursor if available
    let queryParams = `limit=${limit}`;
    if (cursor) {
      queryParams += `&cursor=${cursor}`;
    }
    
    const response = await apiClient.get(`/videos?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// uses cursor-based pagination for Following feed
export const getFollowingVideos = async ({ cursor, limit = 10 }) => {
  try {
    let queryParams = `limit=${limit}`;
    if (cursor) {
      queryParams += `&cursor=${cursor}`;
    }
    
    const response = await apiClient.get(`/videos/following?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching following videos:', error);
    throw error;
  }
};

export const getVideoById = async (id) => {
  try {
    const response = await apiClient.get(`/videos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching video ${id}:`, error);
    throw error;
  }
};

//uses cursor-based pagination
export const getUserVideos = async ({ id, cursor, limit = 10 }) => {
  try {
    let queryParams = `limit=${limit}`;
    if (cursor) {
      queryParams += `&cursor=${cursor}`;
    }
    
    const response = await apiClient.get(`/users/${id}/videos?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching videos for user ${id}:`, error);
    throw error;
  }
};

export const getVideoComments = async (videoId) => {
  try {
    const response = await apiClient.get(`/videos/${videoId}/comments`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for video ${videoId}:`, error);
    return { comments: [] };
  }
};


export const likeVideo = async (videoId) => {
  try {
    const response = await apiClient.post(`/videos/${videoId}/like`);
    return response.data;
  } catch (error) {
    console.error(`Error liking video ${videoId}:`, error);
    throw error;
  }
};

export const unlikeVideo = async (videoId) => {
  try {
    const response = await apiClient.delete(`/videos/${videoId}/like`);
    return response.data;
  } catch (error) {
    console.error(`Error unliking video ${videoId}:`, error);
    throw error;
  }
};


export const addComment = async (videoId, content) => {
  try {
    const response = await apiClient.post('/comments', {
      videoId,
      content
    });
    return response.data;
  } catch (error) {
    console.error(`Error adding comment to video ${videoId}:`, error);
    throw error;
  }
};