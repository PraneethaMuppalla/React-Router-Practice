import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const value = useParams();
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/products");
  };
  return (
    <>
      {" "}
      <h1>Product {value.productId}</h1>
      <button onClick={navigationHandler}>Navigate</button>
    </>
  );
};

export default ProductDetails;
