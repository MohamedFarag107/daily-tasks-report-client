import { ApiError } from "@/types/api";

export const serializedError = (error: any): ApiError => {
  if (error.hasOwnProperty("data")) {
    return error.data as ApiError;
  }

  return {
    statusCode: 500,
    name: "Internal Server Error",
    error: error.message || "An error occurred",
    stack: error.stack,
  };
};
