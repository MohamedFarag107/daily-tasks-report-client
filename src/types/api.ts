export interface Pagination {
  page: number;
  limit: number;
  totalDocs: number;
  totalPages: number;
  hasNextPage: boolean;
  nextPage: null | number;
  hasPrevPage: boolean;
  prevPage: null | number;
}

export interface ApiResponse<T> {
  statusCode: number;
  name: string;
  message: string;
  pagination?: Pagination;
  data: T;
}

export interface ApiError {
  statusCode: number;
  name: string;
  error: string;
  stack?: string;
}
