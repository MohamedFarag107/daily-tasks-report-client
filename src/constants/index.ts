import { getToken } from "@/lib/token";

const Url = import.meta.env.VITE_APP_URL as string;

export const baseUrl = `${Url}/api/v1`;

export const prepareHeaders = (headers: Headers) => {
  const token = getToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

export const MINUTES_IN_HOUR = 60;
export const MAX_HOURS = 8;
export const MAX_DURATION_IN_MINUTES = MAX_HOURS * MINUTES_IN_HOUR;
