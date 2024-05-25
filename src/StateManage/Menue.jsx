import { useState } from "react";

const initialItems = [
  { title: "potato", id: 1 },
  { title: "rice", id: 2 },
  { title: " coffe", id: 3 },
];

export default function Menue() {
  const [items, setItems] = useState(initialItems);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(itemIndex) {
    setSelectedIndex(itemIndex);
  }
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleClick(index)}>Choose</button>
          </li>
        ))}
      </ul>
      <p>{items[selectedIndex].title}</p>
    </>
  );
}
