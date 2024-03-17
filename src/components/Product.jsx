import React from "react";

const Product = ({ product }) => {
  const {
    id,
    title,
    image,
    price,
    description,
    category,
    rating: { rate, count },
  } = product;
  // console.log(product);

  return (
    <div className="cart">
      <div>
        <img src={image} alt="image" />
      </div>
      <div className="cart-details">
        <h2>{title}</h2>
        <p className="price">Price: {price}</p>
        <p className="rating">Rating: {rate}</p>
        <p>Description: {description}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
