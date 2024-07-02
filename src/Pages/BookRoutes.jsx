import { Route, Routes } from "react-router-dom";

import { Book, BookLayout, BookList, NewBooks } from "./index.js";
export function BookRoutes() {
  return (
    <>
      {/* // // if you want that context to show up do this */}
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBooks />} />
        </Route>
      </Routes>
    </>
  );
}

// <BookLayout />
// <Routes>
//   <Route index element={<BookList />} />
//   <Route path=":id" element={<Book />} />
//   <Route path="new" element={<NewBooks />} />
// </Routes>
