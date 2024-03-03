import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {DUMMY_PRODUCTS.map((eachProduct) => (
          <li key={eachProduct.id}>
            <Link to={`/products/${eachProduct.id}`}>{eachProduct.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
