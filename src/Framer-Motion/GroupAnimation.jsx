import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function GroupAnimation() {
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
    <div style={{ padding: "10px", height: "100vh" }}>
      <h1>Items List</h1>
      <button onClick={addItem}>Add</button>
      <div
        style={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          width: "90%",
        }}
      >
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              initial={{ scale: 0, y: "-100px" }}
              animate={{ scale: 1, y: "0" }}
              exit={{ scale: 0, y: "-100px" }}
              transition={{ duration: 0.3, ease: easeInOut }}
              layout
              key={item.id}
              onClick={() => removeItem(item.id)}
              style={{ width: "150px", height: "150px", background: "red" }}
            >
              {item.name}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
//the layout alone is for transition for repositioning
//the mode popover and others are for time of reposition (berfore , after, sametime)
