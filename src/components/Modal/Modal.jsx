import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (event) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className="Overlay">
        <div className="Modal">
          <img className="Modal-img" src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
