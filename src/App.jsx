import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Home, BookList, Book, NewBooks, NotFound, BookLayout } from "./Pages";
import "./App.css";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              BookList
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBooks />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

{
  /* <Route path="/books" element={<BookList />} />
<Route path="/books/:id" element={<Book />} />
<Route path="/books/new" element={<NewBooks />} /> */
}
// return (
//   <>
//     {/* //this is important for the sidebars its good thing to
//     //have different
//   routes for the same path in some cases */}
//     {/* <Routes location="/books"> this will be allways rendered
//       <Route path="/books" element={<h1>Extra Content</h1>} />
//     </Routes> */}
//     <nav>
//       <ul>
//         <li>
//  <NavLink
//     style={({ isActive }) => ({
//       color: isActive ? "red" : "",
//     })}
//     to="/"
//   >
//     {({ isActive }) => (isActive ? "Active Home" : "Home")}
//   </NavLink>
//         </li>
//         <li>
//           <Link to="/books">Books</Link>
//         </li>
//       </ul>
//     </nav>
//     {location.state}
//     <Routes>
//       <Route path="/" element={<Home />} />

//       {/* in case you want to cearate a new Component for the Routes
//        way two*/}
//       <Route path="/books/*" element={<BookRoutes />} />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </>
// );

////////////////////
{
  /* in case you want the links to be appear in all books path
 in way one*/
}
{
  /* <Route path="/books" element={<BookLayout />}>
  <Route index element={<BookList />} />
  <Route path=":id" element={<Book />} />
  <Route path="new" element={<NewBooks />} />
</Route> */
}
//////////////////////////////////////////////////////////////////////////////

////////////for the Zustand stufff ////////////////
// const [streeta, setStreeta] = useState("");
// const { user, street, updateAdressStreet } = useStore((state) => ({
//   user: state.user.profile.name,
//   street: state.user.profile.address.street,
//   updateAdressStreet: state.updateAdressStreet,
// }));

// <h1>{user}</h1>
//       <p>{street}</p>
//       <input
//         type="text"
//         value={streeta}
//         onChange={(e) => setStreeta(e.target.value)}
//       />
//       <button onClick={() => updateAdressStreet(streeta)}>update</button>
