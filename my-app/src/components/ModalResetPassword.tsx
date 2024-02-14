import { FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import { DialogTitle } from "@mui/joy";
import '../styles/modal.scss';
import { ModalPropsType } from "./ModalForgetPassword";
import InputPassword from "./InputPassword";
import UserApi from "services/UserApi";
import { validatePassword } from "utils/functions";

export enum ErrorMessages {
  notMatch = `**Your passwords don't match`,
  inValidCode = `Invalid code`,
  incorrectCode = `**Verification code must have 6 digits`,
  inValidPassword = 'Password should have length at least 7 characters, at least 1 special characters and at least 1 digits'
}


const ModalResetPassword: React.FC<ModalPropsType> = ({ onSubmit, data }) => {

  const [showMessage, setShowMessage] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (validatePassword(newPassword) && validatePassword(confirmPassword)) {
      if (newPassword === confirmPassword) {
        const result = await UserApi.changePassword(data?.code as string, newPassword);
        if (result.status === 200) {
          onSubmit({});
          setShowMessage('');
        }
      }
    } else {
      setShowMessage(ErrorMessages.inValidPassword);
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