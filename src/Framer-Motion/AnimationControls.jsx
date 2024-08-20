import { motion, useAnimationControls } from "framer-motion";
export default function AnimationControls() {
  const controls = useAnimationControls();
  function handleClick() {
    controls.start("flip");
  }
  //this function works one time cuz there is nothing to bring the div
  // to 0 deg if want to work all the time add this code down in this page

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
      <button
        onClick={handleClick}
        style={{
          padding: "10px 30px",
          background: "purple",
          color: "white",
          border: "none",
          borderRadius: 20,
          fontSize: 16,
        }}
      >
        Flip it!
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
        style={{
          height: 150,
          width: 150,
          background: "black",
        }}
      ></motion.div>
    </div>
  );
}

// const controls = useAnimationControls();
// const [isFlipped, setIsFlipped] = useState(false);

// function handleClick() {
//   controls.start(isFlipped ? "initial" : "flip");
//   setIsFlipped(!isFlipped);
// }
