import { Link } from "react-router-dom";

export function BookList() {
  return (
    <>
      <h1>BookList </h1>
      <Link to="/books/1">book 1</Link>
      <br />
      <Link to="/books/2">book 2</Link>
      <br />
      <Link to="/books/new">book new</Link>
    </>
  );
}
