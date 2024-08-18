import { useState } from "react";
import "./TransGroup.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function TransGroup() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([
      ...items,
      {
        id: new Date().getTime(),
        name: `Item : ${items.length + 1}`,
      },
    ]);
  }
  function removeItem(itemID) {
    setItems(items.filter((item) => item.id !== itemID));
  }
  return (
    <div className="container">
      <h2>Items List</h2>
      <button onClick={addItem}>Add</button>

      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <div className="item" onClick={() => removeItem(item.id)}>
              {item.name}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
