import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const value = useParams();
  return <h1>Product {value.productId}</h1>;
};

export default ProductDetails;
