import React from "react";
import AddToCartBtn from './AddToCart';

const Product = ({imageUrl, description, title, productID, price}) => {
  
  return (
    <div>
      <img src={imageUrl} alt={description}></img>
      <p>{description}</p>
      <p>{title}</p>
      <div className='flex'>
        <p className='w-1/2'>${price}</p>
        <div className='w-1/2'>
          <AddToCartBtn productID={productID} />
        </div>
      </div>
    </div>
  );
}

export default Product;