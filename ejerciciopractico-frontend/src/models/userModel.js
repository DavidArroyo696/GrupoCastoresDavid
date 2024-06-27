import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { correo: email });
    return response.data;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
};
