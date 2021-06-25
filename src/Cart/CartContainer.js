import React from "react";
import PersonalCart from './PersonalCart';

const CartContainer = ({personsWithProducts}) => {
  return (
    <div>
      {
        personsWithProducts.map((person, id) => {
          return (
            <div key={id}>
              <PersonalCart products={person.products} />
            </div>
          );
        })
      }
    </div>
  )
};

export default CartContainer;