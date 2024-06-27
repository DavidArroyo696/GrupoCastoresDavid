import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getAllHistorical = async () => {
  try {
    const response = await axios.get(`${API_URL}/historico`);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return [];
  }
};
