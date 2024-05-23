import { useState } from "react";
import PRODUCTS from "./products.js";
import ProductsList from "./PorductList";
import Cart from "./Cart";
import DataFetching from "./Component/DataFetching.jsx";

export default function App() {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <>
      {/* <ProductsList products={products} />
      <Cart /> */}
      <DataFetching />
    </>
  );
}
