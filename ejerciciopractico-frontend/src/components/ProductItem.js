import React from 'react';

const ProductItem = ({ product, user, onChangeStatus, onDelete }) => {
  return (
    <div className="product-item">
      <h3>{product.nombreProducto}</h3>
      <p>Price: ${product.precio}</p>
      <p>Status: {product.estatus}</p>
      {user.idRol === 1 && (
        <>
          <button onClick={() => onChangeStatus(product.idProducto, 'Activo')}>Activate</button>
          <button onClick={() => onChangeStatus(product.idProducto, 'Inactivo')}>Deactivate</button>
          <button onClick={() => onDelete(product.idProducto)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ProductItem;
