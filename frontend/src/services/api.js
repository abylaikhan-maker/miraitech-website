// frontend/src/services/api.js
import axios from 'axios';

const API_BASE = '/api'; // or 'http://127.0.0.1:8000/api' if different server

export const getPublications = () => axios.get(`${API_BASE}/publications/`);
export const getNews = () => axios.get(`${API_BASE}/news/`);
export const getEvents = () => axios.get(`${API_BASE}/events/`);
export const getTestimonials = () => axios.get(`${API_BASE}/testimonials/`);
