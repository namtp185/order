import React from "react";
import ProductCart from './ProductCart';

const PersonalCart = ({products}) => {
  return (
    <div>
      {
        products.map((product, id) => {
          return (
            <div key={id} className="d-flex flex-column">
              <ProductCart product={product}/>
            </div>
          );
        })
      }
    </div>
  )
};

export default PersonalCart;