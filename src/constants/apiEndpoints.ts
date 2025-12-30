/**
 * @file ApiEndpoints
 * @description This file defines the API endpoints used in the application.
 * Ensure that these endpoints are kept up-to-date with the backend routes.
 */
export const API_ENDPOINTS = {
  get: {
    getAllPosts: "/posts",
    getPostById: "/posts/:id",
  },
  post: {
    createPost: "/posts",
  },
  put: {
    updatePostById: "/posts/:id",
  },
  patch: {},
  delete: {},
};
