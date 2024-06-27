import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/productos`, product);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

export const updateProductStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}/productos/${id}`, { estatus: status });
    return response.data;
  } catch (error) {
    console.error('Error updating product status:', error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/productos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    return null;
  }
};
