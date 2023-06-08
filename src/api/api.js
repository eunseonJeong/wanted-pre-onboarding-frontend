import axios from 'axios';

export const token = localStorage.getItem('accessToken');

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  },
});
