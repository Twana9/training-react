import { Route, Routes } from "react-router-dom";
import { Book } from "./Books.jsx";
import { BookList } from "./BookList.jsx";
import { NewBooks } from "./NewBooks.jsx";
import { BookLayout } from "./BookLayout.jsx";
export function BookRoutes() {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBooks />} />
      </Routes>
    </>
  );
}

// // if you want that context to show up do this
// <Route element={<BookLayout/>}>
//         <Route index element={<BookList />} />
//         <Route path=":id" element={<Book />} />
//         <Route path="new" element={<NewBooks />} />
// </Route>
