import React, { useState, useEffect } from 'react';
import { fetchAllProducts, addProduct, changeProductStatus, removeProduct } from '../controllers/productController';
import ProductModal from './ProductModal';
import ProductItem from './ProductItem';

const Inventory = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    };
    getProducts();
  }, []);

  const handleAddProduct = async (product) => {
    await addProduct(product);
    const allProducts = await fetchAllProducts();
    setProducts(allProducts);
    setShowModal(false);
  };

  const handleChangeStatus = async (id, status) => {
    await changeProductStatus(id, status);
    const allProducts = await fetchAllProducts();
    setProducts(allProducts);
  };

  const handleDeleteProduct = async (id) => {
    await removeProduct(id);
    const allProducts = await fetchAllProducts();
    setProducts(allProducts);
  };

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      {user.idRol === 1 && (
        <button onClick={() => setShowModal(true)}>Add Product</button>
      )}
      <div className="product-list">
        {products.map(product => (
          <ProductItem
            key={product.idProducto}
            product={product}
            user={user}
            onChangeStatus={handleChangeStatus}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
      {showModal && (
        <ProductModal onSave={handleAddProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Inventory;
