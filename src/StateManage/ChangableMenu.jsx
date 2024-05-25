import { useState, useEffect } from "react";

const initialItems = [
  { title: "potato", id: 1 },
  { title: "rice", id: 2 },
  { title: " coffe", id: 3 },
];
export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedID, setSelectedID] = useState(1);
  let selectedItem = items.find((item) => item.id === selectedID);
  function handleItemChange(itemID, e) {
    setItems(
      items.map((item) => {
        if (itemID === item.id) return { ...item, title: e.target.value };
        else return item;
      })
    );
  }

  return (
    <>
      <h2>the main menu :</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleItemChange(item.id, e)}
            />
            <button onClick={() => setSelectedID(item.id)}>Choose</button>
          </li>
        ))}
      </ul>
      <h3> you picked : {selectedItem.title}</h3>
    </>
  );
}
