import { queryOptions, useQuery } from "@tanstack/react-query";
import * as Yup from "yup";
import { API_ENDPOINTS } from "@/constants";
import { api, ApiException } from "@/utils";

export const getPostByIdResponseSchema = Yup.object({
  id: Yup.string().required(),
  title: Yup.string().required(),
  body: Yup.string().required(),
  userId: Yup.number().required(),
}).required();

export const getPostByIdQueryOptions = (postId?: string) => {
  return queryOptions({
    enabled: !!postId,
    queryKey: [API_ENDPOINTS.get.getPostById, postId],
    queryFn: async () => {
      if (!postId) throw new ApiException("Post ID is required");
      const response = await api.get(
        API_ENDPOINTS.get.getPostById.replace(":id", postId),
      );
      return getPostByIdResponseSchema.validate(response.data);
    },
  });
};

export function useGetPostById(postId?: string) {
  return useQuery(getPostByIdQueryOptions(postId));
}
