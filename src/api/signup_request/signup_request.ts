import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://localhost:5173/';

import {SignUpData } from '../../types';
// Signup function
export const signup = async (data: SignUpData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, data);
        
        // Dummy token for now
        const token = response.data?.token || 'dummy_token';
        localStorage.setItem('token', token);
        return { success: true, token };
    } catch (error) {
        const err = error as AxiosError; 
        return { success: false, message: err.response?.data || 'Signup failed' };
    }
};