import './Modal.scss';
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
        <div className="modal-content">{children}</div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
