import React from "react";
import CartAPI from "../apis/CartAPI";

const AddToCartBtn = ({productID}) => {
  
  const handleAdd = () => {
    console.log('add to cart...');
    console.log(`productID: ${productID}`);
    CartAPI.addProduct(productID);
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAdd}>
      
    </button>
  );
}

export default AddToCartBtn;