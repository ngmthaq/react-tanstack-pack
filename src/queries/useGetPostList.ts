import { queryOptions, useQuery } from "@tanstack/react-query";
import * as Yup from "yup";
import { api } from "@/api";
import { API_ENDPOINTS } from "@/constants";
import { getPostByIdResponseSchema } from "./useGetPostById";

export const getPostListResponseSchema = Yup.array()
  .of(getPostByIdResponseSchema.clone())
  .required();

export const getPostListQueryOptions = () => {
  return queryOptions({
    queryKey: [API_ENDPOINTS.get.getAllPosts],
    queryFn: async () => {
      const response = await api.get(API_ENDPOINTS.get.getAllPosts);
      return getPostListResponseSchema.validate(response.data);
    },
  });
};

export function useGetPostList() {
  return useQuery(getPostListQueryOptions());
}
