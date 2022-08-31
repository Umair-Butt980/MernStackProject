import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import BackDrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div className={`Modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2> {props.header} </h2>
      </header>
      <form
        onSubmit={
          props.submit ? props.onSubmit : (event) => event.preventDefault
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.children}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {};

export default Modal;
