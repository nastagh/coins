import React, { ReactElement} from "react";
import '../styles/modal.scss';
import '../styles/form.scss';
import { Modal } from "@mui/material";



export type ModalWindowProps = {
  open: boolean,
  // onClose: (open: boolean) => void,
  children: ReactElement;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ open, children }) => {
  return (
    <React.Fragment>
      <Modal open={open} className="modal-wrapper">
        {children}
      </Modal>
    </React.Fragment>
  )


}

export default ModalWindow;