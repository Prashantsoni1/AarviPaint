// import axios, { AxiosError } from 'axios';

// const API_BASE_URL = 'https://67a32de431d0d3a6b7828f42.mockapi.io/';

// import {SignUpData } from '../../types';
// // Signup function
// export const signup = async (data: SignUpData, ) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/user`, {
//             email: data.email,
//             password: data.password,
//         });

//         // Dummy token for now
//         const token = response.data?.token || 'dummy_token';
//         localStorage.setItem('token', token);
//         return { success: true, token };
//     } catch (error) {
//         const err = error as AxiosError; 
//         return { success: false, message: err.response?.data || 'Signup failed' };
//     }
// };