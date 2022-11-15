import { CloseIcon } from "components/icons";
import React from "react";
import styles from "./styles.module.scss";

type IModal = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen = true, onClose }: IModal) => {
  return (
    <div className={[styles.modal, !isOpen && "hidden"].join(" ")}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalOverlayDarkBg} onClick={onClose} />
      </div>
      <div className={styles.modalContainer}>
        <div
          className={styles.modalCard}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className={styles.modalCardHeader}>
            <span> ایجاد سوال جدید</span>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.modalCardBody}>
            <form>
              <div>
                <label>موضوع</label>
                <input defaultValue="مشکل در اجرای کد" />
              </div>
              <div>
                <label>موضوع</label>
                <textarea defaultValue="مشکل در اجرای کد" />
              </div>
            </form>
          </div>
          <div className={styles.modalCardActions}>
            <button className="btn text-xs font-bold text-green" onClick={onClose}>
              انصراف
            </button>
            <button className="btn btnGreen min-h-[36px] min-w-[100px] rounded-md text-xs font-bold">
              ایجاد سوال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
