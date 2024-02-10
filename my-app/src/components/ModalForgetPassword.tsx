import { Stack } from "@mui/material";
import React, { useState } from "react";
import { DialogContent, DialogTitle} from "@mui/joy";
import '../styles/modal.scss';
import { PasswordResetData } from "pages/LoginPage";
import InputEmail from "./InputEmail";

export type ModalPropsType = {
  onSubmit: (data: PasswordResetData) => void,
  data?: { email?: string, code?: string },
}


const ModalForgetPassword: React.FC<ModalPropsType> = ({ onSubmit }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get('email') as string;

    if (email === '') {
      setShowMessage(true);
    } else {
      onSubmit({ email });
      setShowMessage(false);
    }

    // должна емейл отправить на сервер, и если сервер вернул положительный ответ, то идем дальше, если нет то показываем валидационную оишбку
  }

  return (
    <React.Fragment>
        <DialogTitle className="modal-tittle" >
          Forgot password
        </DialogTitle>
        <DialogContent className="modal-content">
          Enter the email you used to register <br /> with and we'll send you a code to <br /> reset your password.
        </DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <div>
            <InputEmail name="email" placeholder="Email address" className="modal-input" />
            {showMessage && <p className="message-code">**You must to write Email address</p>}
            </div>
            <button type="submit" className="modal-submit-button">
              Send password reset code
            </button>
          </Stack>
        </form>
    </React.Fragment>
  )

}

export default ModalForgetPassword;