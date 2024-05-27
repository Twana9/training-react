import { useState } from "react";
import PRODUCTS from "./products.js";
import ProductsList from "./PorductList";
import Cart from "./Cart";
import DataFetching from "./Component/DataFetching.jsx";

import List from "./Component/List.jsx";
import QuestionGame from "./StateManage/Question.jsx";
import FeedbackForm from "./StateManage/FeedbackForm.jsx";
import Menue from "./StateManage/Menue.jsx";
import Menu from "./StateManage/ChangableMenu.jsx";
import StopWatch from "./EscapeHatches/SimpleStopWatch.jsx";
import Counter from "./Zustand/Counter.jsx";
import Form from "./Component/DataPosting.jsx";
import Data from "./Component/NewData.jsx";
export default function App() {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <>
      {/* <ProductsList products={products} />
      <Cart /> */}
      {/* <DataFetching /> */}
      {/* <List /> */}
      {/* <QuestionGame /> */}
      {/* <FeedbackForm /> */}
      {/* <Menue /> */}
      {/* <Menu /> */}
      {/* <StopWatch /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      <Data />
    </>
  );
}
