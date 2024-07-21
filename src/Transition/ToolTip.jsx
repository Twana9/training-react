import { useState } from "react";
import "./ToolTip.css";

export default function ToolTip() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        Open
      </button>
      {isOpen && (
        <ul className="list ">
          <li>Name</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Place</li>
        </ul>
      )}
    </div>
  );
}
//if you want to give it animation in both way the only way yet i found to do that is
// to use display and transform in both open and close so the transition in order for hte transition to work
