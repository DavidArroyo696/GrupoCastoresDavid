import React, { useState, useEffect } from 'react';
import { fetchAllProducts } from '../controllers/productController';

const SalidaProducto = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      const activeProducts = allProducts.filter(product => product.estatus === 'Activo');
      setProducts(activeProducts);
    };
    getProducts();
  }, []);

  return (
    <div className="salida-producto">
      <h2>Salida de Productos</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.idProducto} className="product-item">
            <h3>{product.nombreProducto}</h3>
            <p>Price: ${product.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalidaProducto;
