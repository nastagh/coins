import { FormControl, Input, Modal, Stack, ThemeProvider } from "@mui/material";
import ModalDialog from '@mui/joy/ModalDialog';
import React from "react";
import { DialogContent, DialogTitle, ModalClose } from "@mui/joy";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import '../styles/modal.scss';
// import { myTheme } from "utils/theme";


type ModalProps = {
  open: boolean,
  onClose: (open: boolean) => void
}

const ModalForgetPassword: React.FC<ModalProps> = ({ open, onClose }) => {

  return (
    // <ThemeProvider theme={myTheme}>
      <React.Fragment>
        <Modal open={open} onClose={() => onClose(false)} className="modal-container">
          <ModalDialog>
            <DialogTitle>
              <ArrowLeftIcon sx={{ cursor: 'pointer' }} />
              Forgot password
            </DialogTitle>
            <ModalClose variant="plain" onClick={() => onClose(false)} />
            <DialogContent>
              Enter the email you used to register with and we'll send you a code to reset your password.
            </DialogContent>
            <form onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              onClose(false);
            }}>
              <Stack spacing={2}>
                <FormControl>
                  <Input autoFocus placeholder="Email address" />
                </FormControl>
                <button type="submit">
                  Send password reset code
                </button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    // </ThemeProvider>

  )

}

export default ModalForgetPassword;