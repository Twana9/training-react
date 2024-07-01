import { Outlet, Link } from "react-router-dom";

export function BookLayout() {
  return (
    <>
      <Link to="/books/1">book 1</Link>
      <br />
      <Link to="/books/2">book 2</Link>
      <br />
      <Link to="/books/new">book new</Link>
      <Outlet context={{ company: "astepor" }} />
    </>
  );
}

// <Link to="/books/1" replace>
//   Book 1
// </Link>
// <br />
// <Link to="/books/2">Books 2</Link>
// <br />
// <Link to="/books/new">new books</Link>
// <Outlet context={{ name: "twana" }} />
