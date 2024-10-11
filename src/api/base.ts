import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { baseUrl, prepareHeaders } from "@/constants";
import { ApiError } from "@/types/api";
import { Tags } from "@/types/tags";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: prepareHeaders,
  }) as unknown as BaseQueryFn<string | FetchArgs, unknown, ApiError, object>,
  tagTypes: Object.values(Tags),
  endpoints: () => ({}),
});
