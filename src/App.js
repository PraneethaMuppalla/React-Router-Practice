import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

const RouteDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   { path: "/products", element: <Products /> },
// ]);

const router = createBrowserRouter(RouteDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
