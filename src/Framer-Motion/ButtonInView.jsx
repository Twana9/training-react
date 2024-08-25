import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ButtonInView() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {isInView && (
        <motion.button
          style={{ position: "fixed", bottom: "10vh", right: "5vw" }}
        >
          Top
        </motion.button>
      )}
      <div
        style={{
          height: "10vh",
        }}
      ></div>
      <div
        ref={ref}
        style={{
          height: "100vh",
        }}
      >
        1
      </div>
      <div
        ref={ref}
        style={{
          height: "100vh",
        }}
      >
        2
      </div>
      <div
        ref={ref}
        style={{
          height: "100vh",
        }}
      >
        3
      </div>
    </div>
  );
}
