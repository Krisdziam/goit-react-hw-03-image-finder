import { Component } from "react";
import { createPortal } from "react-dom";

import styles from './Modal.module.css';



const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscClose);
  }

  onEscClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImage, type } = this.props;
  
    return createPortal(
      <div onClick={this.onBackdropClick} className={styles.ModalBackdrop}>
        <div className={styles.ImageModal}>
       
          <img src={modalImage} alt={type} />
         
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;