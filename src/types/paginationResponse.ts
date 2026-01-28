import * as Yup from "yup";

// Paginated Response Schemas
export const paginatedResponseSchema = Yup.object({
  data: Yup.mixed().required().nullable(),
  total: Yup.number().required().nullable(),
});

// Paginated Response Types
export type PaginatedResponseSchema = Yup.InferType<
  typeof paginatedResponseSchema
>;
