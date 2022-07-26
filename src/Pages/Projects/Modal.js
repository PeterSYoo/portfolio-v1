import './Modal.scss';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import ReactPortal from './ReactPortal';

const Modal = ({
  children,
  isOpen,
  handleClose,
  targetId = 'default-modal-container',
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId={targetId}>
      <div className="modal" aria-modal role="alertdialog">
        <div className="modal-content">
          <button onClick={handleClose} className="close-btn">
            X
          </button>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
