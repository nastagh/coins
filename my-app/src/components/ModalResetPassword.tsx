import { FormControl, Input, Stack } from "@mui/material";
import ModalDialog from '@mui/joy/ModalDialog';
import React from "react";
import { DialogContent, DialogTitle, ModalClose } from "@mui/joy";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import '../styles/modal.scss';


export type ModalResetPassword = {
  onClose: (close: boolean) => void,
  // openPrev: () => void
}

const ModalResetPassword: React.FC<ModalResetPassword> = ({ onClose }) => {


  return (
    <React.Fragment>
      {/* <Modal open={open} onClose={() => onClose(false)} className="modal-wrapper"> */}
      <ModalDialog className="modal-container">
        <DialogTitle className="modal-tittle" >
          <ArrowLeftIcon sx={{ cursor: 'pointer' }} onClick={() => onClose(false)} className="modal-arrow" />
          Reset password
          <ModalClose variant="plain" onClick={() => onClose(false)} className='modal-plane' />
        </DialogTitle>
        <form onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          onClose(false);
        }}>
          <Stack spacing={2}>
            <FormControl>
              <div className='password-container'>
                <Input placeholder="New password" className="modal-input" />
                <img alt='eye' title='eye' src='../assets/images/show.svg' className='password-img' />
              </div>
              <div className='password-container'>
                <Input placeholder="Confirm password" className="modal-input" />
                <img alt='eye' title='eye' src='../assets/images/show.svg' className='password-img' />
              </div>
            </FormControl>
            <button type="submit" className="modal-submit-button">
              Continue
            </button>
          </Stack>
        </form>
      </ModalDialog>
      {/* </Modal> */}
    </React.Fragment>
  )

}

export default ModalResetPassword;