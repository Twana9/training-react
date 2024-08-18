import { useState } from "react";
import "./Trans.css";
import { CSSTransition } from "react-transition-group";
export default function Trans() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Open</button>
      <CSSTransition in={isOpen} timeout={1000} classNames="fade" unmountOnExit>
        <div className="div"></div>
      </CSSTransition>
    </div>
  );
}
