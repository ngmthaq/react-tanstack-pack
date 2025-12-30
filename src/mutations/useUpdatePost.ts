import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import { API_ENDPOINTS } from "@/constants";
import type { PostFormSchema } from "@/forms";
import { createPostResponseSchema } from "./useCreatePost";

export const updatePostResponseSchema = createPostResponseSchema.clone();

export function useUpdatePost() {
  return useMutation({
    mutationKey: [API_ENDPOINTS.put.updatePostById],
    mutationFn: async (postData: PostFormSchema) => {
      if (!postData.id) throw new Error("Post ID is required for update");
      const response = await api.put(
        API_ENDPOINTS.put.updatePostById.replace(":id", postData.id),
        postData,
      );
      return updatePostResponseSchema.validate(response.data);
    },
  });
}
