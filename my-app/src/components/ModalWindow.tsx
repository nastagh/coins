import React, { ReactElement } from "react";
import '../styles/modal.scss';
import '../styles/form.scss';
import { Modal } from "@mui/material";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ModalClose, ModalDialog } from "@mui/joy";



export type ModalWindowProps = {
  open: boolean,
  children: ReactElement,
  onClose: () => void,
  showBack: boolean,
  onBack: () => void,
}


const ModalWindow: React.FC<ModalWindowProps> = ({ open, children, onClose, showBack, onBack }) => {

  return (
    <React.Fragment>
      <Modal open={open} className="modal-wrapper">
        <ModalDialog className="modal-container">
          {showBack && <ArrowLeftIcon onClick={() => onBack()} className="modal-arrow" />}
          <ModalClose variant="plain" onClick={onClose} className='modal-plane' />
          {children}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  )
}

export default ModalWindow;