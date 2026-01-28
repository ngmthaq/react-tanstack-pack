// Pagination Types
export type PaginatedParameters = {
  page: number | null;
  pageSize: number | null;
};

// Sorting Types
export type SortingParameters = {
  sortBy: string | null;
  sortOrder: "asc" | "desc" | null;
};

// Filtering Types
export type FilteringParameters = Record<string, unknown>;

// Combined Get List Parameters
export type GetListParameters = PaginatedParameters &
  SortingParameters &
  FilteringParameters;
