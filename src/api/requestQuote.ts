// import axios, { AxiosError } from 'axios';
// import { requestForm } from '../types';
// const API_BASE_URL = 'https://67a32de431d0d3a6b7828f42.mockapi.io/';

// export const requestQuote = async (formData: requestForm) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/user`, formData);
//     return { success: true, data: response.data };
//   } catch (error) {
//     const err = error as AxiosError;
//     return { success: false, message: err.response?.data || 'Form submission failed' };
//   }
// };
