import { Stack } from "@mui/material";
import React, { useState } from "react";
import { DialogContent, DialogTitle } from "@mui/joy";
import '../styles/modal.scss';
import { ModalPropsType } from "./ModalForgetPassword";
import InputEmail from "./InputEmail";



const ModalEmailVerification: React.FC<ModalPropsType> = ({ onSubmit }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const code = formData.get('code') as string;

    if (code.length === 6) {
      onSubmit({ code });
      setShowMessage(false)
    } else {
      setShowMessage(true)
    }

    // отправляешь код на сервер, если сервер вернул положительный ответ идешь дальше, иначе показываешь сообщение "код неправильный"
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
            {showMessage && <p className="message-code">**Verification code must have 6 digits</p>}
          </div>
          <button type="submit" className="modal-submit-button">
            Verify
          </button>
        </Stack>
      </form>
      <div className="verify-text">
        Resend code
      </div>
    </React.Fragment>
  )

}

export default ModalEmailVerification;