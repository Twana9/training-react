import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function FirstFramer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 30px",
          background: "purple",
          color: "white",
          border: "none",
          borderRadius: 20,
        }}
        layout
      >
        Show / Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            initial={{
              rotate: 0,
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: 0,
              scale: 0,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              height: 150,
              width: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
