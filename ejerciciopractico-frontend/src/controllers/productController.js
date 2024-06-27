import { getAllProducts, createProduct, updateProductStatus, deleteProduct } from '../models/productModel';

export const fetchAllProducts = async () => {
  return await getAllProducts();
};

export const addProduct = async (product) => {
  return await createProduct(product);
};

export const changeProductStatus = async (id, status) => {
  return await updateProductStatus(id, status);
};

export const removeProduct = async (id) => {
  return await deleteProduct(id);
};
