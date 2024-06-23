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
import Form from "./Component/DataPosting.jsx";
import Data from "./Component/NewData.jsx";
/////////////////////////////////////////////////
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";

import { NotFound } from "./Pages/NotFound.jsx";
import { BookLayout } from "./Pages/BookLayout.jsx";
import { BookRoutes } from "./Pages/BookRoutes.jsx";
import { NewBooks } from "./Pages/NewBooks.jsx";
import MailClientApp2 from "./StateManage/MailClientApp2.jsx";
import FilterList from "./SearchingAlgorithm/SortingSearch.jsx";
import ContactApp from "./contactApp/ContactApp.jsx";
import { useStore } from "./store.js";
import Alert from "./EscapeHatches/Alert.jsx";
import Chat from "./EscapeHatches/Chat.jsx";
import Scroll from "./EscapeHatches/Scroll.jsx";
import Forward from "./EscapeHatches/Forward.jsx";
import Video from "./EscapeHatches/Video.jsx";
import FirstPost from "./ApiFetching/FirstPost.jsx";
export default function App() {
  // const [products, setProducts] = useState(PRODUCTS);
  const location = useLocation();

  return (
    <>
      {" "}
      <FirstPost />
    </>
  );
}
// return (
//   <>
//     {/* //this is important for the sidebars its good thing to
//     //have different
//   routes for the same path in some cases */}
//     {/* <Routes>
//       <Route path="/books" element={<h1>Extra Content</h1>} />
//     </Routes> */}
//     <nav>
//       <ul>
//         <li>
//           <NavLink
//             style={({ isActive }) => (isActive ? { color: "red" } : {})}
//             to="/"
//           >
//             Home
//           </NavLink>
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
