import { Stack } from "@mui/material";
import React, { useState } from "react";
import { DialogContent, DialogTitle } from "@mui/joy";
import '../styles/modal.scss';
import { ModalPropsType } from "./ModalForgetPassword";
import InputEmail from "./InputEmail";
import UserApi from "services/UserApi";
import { ErrorMessages } from "./ModalResetPassword";



const ModalEmailVerification: React.FC<ModalPropsType> = ({ onSubmit, data }) => {
  const [showMessage, setShowMessage] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const code = formData.get('code') as string;

    if (code.length === 6) {
      const result= await UserApi.verifyCode(code);
      if (result.status === 200) {
        onSubmit({ code });
        setShowMessage('')
      } else {
        setShowMessage(ErrorMessages.inValidCode)
      }
    } else {
      setShowMessage(ErrorMessages.incorrectCode)
    }
  }

  return (
    <React.Fragment>
      <DialogTitle className="modal-tittle" >
        Email verification
      </DialogTitle>
      <DialogContent className="modal-content">
        You will shortly receive an email containing a 6-digit verification code. Can't find it? Check your spam folder, or resend the email.
      </DialogContent>
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <div>
            <InputEmail name="code" placeholder="Email Verification Code" className="modal-input" type="number" />
            {showMessage && <p className="message-code">{showMessage}</p>}
          </div>
          <button type="submit" className="modal-submit-button">
            Verify
          </button>
        </Stack>
      </form>
      <div className="verify-text" onClick={async () => await UserApi.createEmail(data?.email as string)}>
        Resend code
      </div>
    </React.Fragment>
  )
}

export default ModalEmailVerification;