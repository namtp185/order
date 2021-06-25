import React from "react";
import Product from "./Product";

const ProductContainer = ({products}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
    {
      products.map((product, id) => {
        return (
          <div key={id}>
            <Product imageUrl={product.imageUrl} description={product.description} title={product.title} price={product.price}/>
          </div>
        );
      })
    }
    </div>
  );
}

export default ProductContainer;