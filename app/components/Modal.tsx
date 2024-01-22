import React from "react";

interface ModalProps {
  modalOpen: boolean;
  children: React.ReactNode;
  id: string;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, children, id }) => {
  return (
    <dialog id={id} className={` modal ${modalOpen ? "open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            onClick={() =>
              document.getElementById(`${id}`)?.classList.remove("open")
            }
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
