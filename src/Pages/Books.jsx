import { useParams } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
export function Book() {
  const { id } = useParams();
  // const obj = useOutletContext();
  return (
    <>
      <h1>Book {id}</h1>
    </>
  );
}
// the /:id is just a parameter and the Book is one unchangable Component version

// The /:id syntax in your route definition is a way to create a dynamic
// route that can match different URL segments. It is used to capture
// a part of the URL as a parameter and make it accessible within the
//  component that's rendered by that route. In your case, the /:id is
//  used to capture the book's ID from the URL, which you then use in
//  the Book component to display information about a specific book.
