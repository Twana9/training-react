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
/////////////////////////////////////////////////
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Book } from "./Pages/Books.jsx";
import { BookList } from "./Pages/BookList.jsx";
import { About } from "./Pages/About.jsx";

export default function App() {
  // const [products, setProducts] = useState(PRODUCTS);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}
{
  /* <ProductsList products={products} />
      <Cart /> */
}
{
  /* <DataFetching /> */
}
{
  /* <List /> */
}
{
  /* <QuestionGame /> */
}
{
  /* <FeedbackForm /> */
}
{
  /* <Menue /> */
}
{
  /* <Menu /> */
}
{
  /* <StopWatch /> */
}
{
  /* <Counter /> */
}
{
  /* <Form /> */
}
{
  /* <Data /> */
}
