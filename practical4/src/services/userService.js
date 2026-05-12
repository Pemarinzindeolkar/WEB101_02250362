import apiClient from '../lib/api-config';

export const getUserById = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
};

export const updateUser = async (id, formData) => {
  try {
    const response = await apiClient.put(`/users/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    throw error;
  }
};

export const followUser = async (userId) => {
  try {
    console.log(`Following user ${userId}`);
    const response = await apiClient.post(`/users/${userId}/follow`);
    return response.data;
  } catch (error) {
    console.error(`Error following user ${userId}:`, error);
    throw error;
  }
};

export const unfollowUser = async (userId) => {
  try {
    console.log(`Unfollowing user ${userId}`);
    const response = await apiClient.delete(`/users/${userId}/follow`);
    return response.data;
  } catch (error) {
    console.error(`Error unfollowing user ${userId}:`, error);
    throw error;
  }
};

export const getUserFollowers = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}/followers`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching followers for user ${id}:`, error);
    throw error;
  }
};

export const getUserFollowing = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}/following`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching following for user ${id}:`, error);
    throw error;
  }
};

export const getUserVideos = async (userId) => {
  try {
   
    const id = typeof userId === 'object' ? userId.id : userId;
    const response = await apiClient.get(`/users/${id}/videos`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching videos for user ${userId}:`, error);
    return { videos: [] };
  }
};