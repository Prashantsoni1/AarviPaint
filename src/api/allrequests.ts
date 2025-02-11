import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { LoginData, SignUpData, requestForm } from "../types";

const apiClient = axios.create({
  baseURL: "https://67a32de431d0d3a6b7828f42.mockapi.io/", // Base API URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequestConfig extends AxiosRequestConfig {
  headers?: Record<string, string>;
}

const apiRequest = async <T>(
  method: Method,
  endpoint: string,
  data: any = {},
  params: any = {},
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    const config: ApiRequestConfig = {
      method,
      url: endpoint,
      data: method !== "GET" ? data : undefined,
      params: method === "GET" ? params : undefined,
      headers: { ...apiClient.defaults.headers.common, ...headers },
    };

    const response = await apiClient.request<T>(config);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error("API Request Error:", err.response?.data || err.message);
    throw err.response?.data || err.message;
  }
};

export const login = async (data: LoginData) => {
  try {
    const response = await apiRequest<{ token: string }>("POST", "/login", data);
    const token = response.token || "dummy_token";
    localStorage.setItem("token", token);
    return { success: true, token };
  } catch (error) {
    return { success: false, message: error || "Login failed" };
  }
};

export const signUp = async (data: SignUpData) => {
  try {
    const response = await apiRequest<SignUpData>("POST", "/user", data);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, message: error || "Signup failed" };
  }
};

export const requestQuote = async (formData: requestForm) => {
  try {
    const response = await apiRequest<requestForm>("POST", "/user", formData);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, message: error || "Form submission failed" };
  }
};

export default apiRequest;
