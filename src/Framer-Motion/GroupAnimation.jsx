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
      <motion.div
        style={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          width: "90%",
        }}
        layout
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              key={item.id}
              onClick={() => removeItem(item.id)}
              style={{ width: "150px", height: "150px", background: "red" }}
            >
              {item.name}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
