import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Books 2</Link>
      <br />
      <Link to="/books/new">new books</Link>
      <Outlet context={{ name: "twana" }} />
    </>
  );
}
