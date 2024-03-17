import React from "react";
import Product from "./Product";

const Products = (props) => {
  const products = props.products;
  // console.log(products);

  return (
    <div className="products-cart">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
