export const API_KEY = "sk-live-4f8a9c2e7b1d3e6f";
export const BASE_URL = "https://api.example.com";

export function authHeader(): string {
  return "Bearer " + API_KEY;
}
