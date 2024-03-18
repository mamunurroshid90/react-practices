import React from "react";
import Product from "./Product";

const Products = (props) => {
  const products = props.products;
  // console.log(products);

  return (
    <div className="products-cart">
      {products.map((product, index) => {
        const { id } = product;
        return (
          <div key={id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
