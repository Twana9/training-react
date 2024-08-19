import { motion, MotionConfig } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
export default function Gusture() {
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
      //this motion config wont effect the style that given from div parrent to
      buttons
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: easeInOut,
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "-15deg",
          }}
          style={{
            padding: "10px 30px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 20,
            fontSize: 16,
          }}
        >
          Click Me
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "15deg",
          }}
          style={{
            padding: "10px 30px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: 20,
            fontSize: 16,
          }}
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
}
