import { FormControl, Input, Stack} from "@mui/material";
import ModalDialog from '@mui/joy/ModalDialog';
import React from "react";
import { DialogContent, DialogTitle, ModalClose } from "@mui/joy";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import '../styles/modal.scss';


export type ModalEmailVerification = {
  openNext: () => void,
  onClose: (close: boolean) => void,
  // openPrev: () => void
}

const ModalEmailVerification: React.FC<ModalEmailVerification> = ({ onClose, openNext }) => {
  

  return (
      <React.Fragment>
        {/* <Modal open={open} onClose={() => onClose(false)} className="modal-wrapper"> */}
          <ModalDialog  className="modal-container">
            <DialogTitle className="modal-tittle" >
              <ArrowLeftIcon sx={{ cursor: 'pointer' }} onClick={() => onClose(false)} className="modal-arrow"/>
              Email verification
            <ModalClose variant="plain" onClick={() => onClose(false)} className='modal-plane'/>
            </DialogTitle>
            <DialogContent className="modal-content">
              You will shortly receive an email containing a 6-digit verification code. Can't find it? Check your spam folder, or resend the email.
            </DialogContent>
            <form onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              openNext();
            }}>
              <Stack>
                <FormControl>
                  <Input placeholder="Email Verification Code" className="modal-input"/>
                </FormControl>
                <button type="submit" className="modal-submit-button">
                  Verify
                </button>
              </Stack>
            </form>
            <div className="verify-text">
              Resend code
            </div>
          </ModalDialog>
        {/* </Modal> */}
      </React.Fragment>
)

}

export default ModalEmailVerification;