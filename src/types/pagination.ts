import * as Yup from "yup";

// Pagination Types and Schemas
export const paginatedParametersSchema = Yup.object({
  page: Yup.number().min(1).required().nullable(),
  pageSize: Yup.number().min(1).required().nullable(),
});

export type PaginatedParameters = Yup.InferType<
  typeof paginatedParametersSchema
>;

// Sorting Types and Schemas
export const sortingParametersSchema = Yup.object({
  sortBy: Yup.string().required().nullable(),
  sortOrder: Yup.string().oneOf(["asc", "desc"]).required().nullable(),
});

export type SortingParameters = Yup.InferType<typeof sortingParametersSchema>;

// Filtering Types and Schemas
export const filteringParametersSchema = Yup.object();

export type FilteringParameters = Record<string, unknown>;

// Combined Get List Parameters
export const getListParametersSchema = paginatedParametersSchema
  .concat(sortingParametersSchema)
  .concat(filteringParametersSchema);

export type GetListParameters = Yup.InferType<typeof getListParametersSchema> &
  FilteringParameters;

// Paginated Response Types and Schemas
export const paginatedResponseSchema = Yup.object({
  data: Yup.mixed().required().nullable(),
  total: Yup.number().required().nullable(),
});

export type PaginatedResponse = Yup.InferType<typeof paginatedResponseSchema>;
