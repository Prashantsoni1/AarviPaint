import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:5173'; 

import { LoginData } from '../../types';

// Login function
export const login = async (data: LoginData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, data);
        
        // Dummy token for now
        const token = response.data?.token || 'dummy_token';
        localStorage.setItem('token', token);
        return { success: true, token };
    } catch (error) {
        const err = error as AxiosError; 
        return { success: false, message: err.response?.data || 'Login failed' };
    }
};
    