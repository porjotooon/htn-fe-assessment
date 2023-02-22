import React, { useEffect, useRef } from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import VisuallyHidden from "./VisuallyHidden";

import styles from "./Modal.module.css";

function Modal({ title, handleDismiss, children }) {
  const closeBtnRef = useRef();

  useEffect(() => {
    const currentlyFocusedElem = document.activeElement;

    closeBtnRef.current.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
