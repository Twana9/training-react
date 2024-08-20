import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function AnimationOnView() {
  //we can use the boolean in our good

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("the div is in view" + isInView);
  }, [isInView]);
  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      ></div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          height: "100vh",
          background: "black",
        }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "background 1s",
        }}
      ></div>
    </>
  );
}
//we can get the boolean value once like that :
//  const isInView = useInView(ref, { once: true });
