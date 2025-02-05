import axios, { AxiosError } from 'axios';
import { requestForm } from '../types';
const API_BASE_URL = 'http://localhost:5173';

export const requestQuote = async (formData: requestForm) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/submit-form`, formData);
    return { success: true, data: response.data };
  } catch (error) {
    const err = error as AxiosError;
    return { success: false, message: err.response?.data || 'Form submission failed' };
  }
};
