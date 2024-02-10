import { FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import { DialogTitle } from "@mui/joy";
import '../styles/modal.scss';
import { ModalPropsType } from "./ModalForgetPassword";
import InputPassword from "./InputPassword";

enum ErrorMessages {
  notMatch = `**Your passwords don't match`,
  notWrite = `**You have to write passwords`
}



const ModalResetPassword: React.FC<ModalPropsType> = ({ onSubmit }) => {
  // при подтверждении новых паролей проверяешь что они одинаковые, и если да то отправляешь запрос на сервер 
  // отправляем на сервер пароль

  const [showMessage, setShowMessage] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (newPassword === '' || confirmPassword === '') {
      setShowMessage(ErrorMessages.notWrite);
    } else {
      if (newPassword === confirmPassword) {
        onSubmit({});
        setShowMessage('');
      } else {
        setShowMessage(ErrorMessages.notMatch);
      }
    }
  }

  return (
    <React.Fragment>
      <DialogTitle className="modal-tittle" >
        Reset password
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <FormControl>
            <InputPassword placeholder="New password" name="newPassword" className="modal-input" />
          </FormControl>
          <FormControl>
            <div>
              <InputPassword placeholder="Confirm password" name="confirmPassword" className="modal-input" />
              {showMessage && <p className="message-code">{showMessage}</p>}
            </div>
          </FormControl>
          <button type="submit" className="modal-submit-button">
            Continue
          </button>
        </Stack>
      </form>
    </React.Fragment>
  )

}

export default ModalResetPassword;