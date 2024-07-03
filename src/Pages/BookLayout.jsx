import { Outlet, Link, useSearchParams } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <Link to="/books/1">book 1</Link>
      <br />
      <Link to="/books/2">book 2</Link>
      <br />
      <Link to={`/books/${number}`}>book {number}</Link>
      <br />
      <Link to="/books/new">book new</Link>
      <Outlet context={{ company: "astepor" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
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
