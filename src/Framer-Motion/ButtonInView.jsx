import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function ButtonInView() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const isAnyInView = isInView1 || isInView2 || isInView3;

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {isAnyInView && (
        <motion.button
          onClick={() => scrollTo(0, 0)}
          style={{
            position: "fixed",
            bottom: "10vh",
            right: "5vw",
            borderRadius: "50%",
            padding: "20px",
            fontSize: "20px",
            background: "green",
            color: "white",
            outline: "none",
            border: "none",
          }}
        >
          Top
        </motion.button>
      )}
      <div
        style={{
          height: "180vh",
          background: "purple",
        }}
      >
        {" "}
        first
      </div>
      <div
        ref={ref1}
        style={{
          height: "100vh",
          background: "yellow",
        }}
      >
        1
      </div>
      <div
        ref={ref2}
        style={{
          height: "100vh",
          background: "lightBlue",
        }}
      >
        2
      </div>
      <div
        ref={ref3}
        style={{
          height: "100vh",
          background: "pink",
        }}
      >
        3
      </div>
    </div>
  );
}
