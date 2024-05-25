import ItemList from "./ItemList";
import { useState } from "react";
const nextId = 3;
const initialLists = [
  { id: 1, name: "lunar", seen: false },
  { id: 2, name: "moon", seen: false },
  { id: 3, name: "jupiter", seen: true },
];

export default function List() {
  const [myList, setMyList] = useState(initialLists);
  const [yourList, setYourList] = useState(initialLists);

  function handleToggleMyList(itemID, nextSeen) {
    setMyList(
      myList.map((item) => {
        if (itemID === item.id) return { ...item, seen: nextSeen };
        else return item;
      })
    );
  }
  function handleToggleYourList(itemID, nextSeen) {
    setYourList(
      yourList.map((item) => {
        if (itemID === item.id) return { ...item, seen: nextSeen };
        else return item;
      })
    );
  }

  return (
    <>
      <h2>my list of favorate stu</h2>
      <ItemList userList={myList} onToggle={handleToggleMyList} />

      <h2>your list of favorate stu</h2>
      <ItemList userList={yourList} onToggle={handleToggleYourList} />
    </>
  );
}
