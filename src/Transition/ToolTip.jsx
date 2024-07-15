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
        <ul className="list">
          <li>Name</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Place</li>
        </ul>
      )}
    </div>
  );
}
