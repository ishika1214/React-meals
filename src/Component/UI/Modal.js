import React from 'react'
import ReactDOM  from "react-dom";
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
  };

const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
const Modal = (props) => {
    const portal = document.getElementById("overlays");

    return (
      <>
        {ReactDOM.createPortal(<Backdrop onClose={()=>{props.onClose(false)}}/>, portal)}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portal
        )}
      </>
    );
  };
export default Modal
