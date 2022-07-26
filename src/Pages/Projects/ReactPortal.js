import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (wrapperId) => {
  const element = document.createElement('div');
  element.setAttribute('id', wrapperId);
  window.parent.document.body.append(element);
  return element;
};

const ReactPortal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  let systemCreated = false;
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated) {
        element?.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
