import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function FlushSync() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  function handleClick() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  function handleClickB(index) {
    setIndex(index);
    document.getElementsByClassName("a")[index].style.background = "red";
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <br />
      <ul style={{ display: "flex", gap: "5px", overflow: "scroll" }}>
        {catList.map((cat, i) => (
          <li
            className="a"
            onClick={() => handleClickB(i)}
            ref={index === i ? selectedRef : null}
            key={cat.id}
            style={{ background: i === index && "red", padding: "5px" }}
          >
            <img src={cat.imgURL} />
          </li>
        ))}
      </ul>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imgURL: `https://picsum.photos/id/${i}/150/100`,
  });
}
