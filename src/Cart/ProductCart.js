import React from "react";

const ProductCart = ({product}) => {
  return (
    <div>
      <img width='100px' height='100px' src={product.imageUrl} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  )
};

export default ProductCart;