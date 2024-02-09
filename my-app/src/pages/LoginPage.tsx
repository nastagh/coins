import { Typography } from '@mui/material';
import '../styles/login.scss';
import { useState } from 'react';
import AdditionalButtonsSignIn from 'components/AdditionalButtonsSignIn';
import Form from 'components/Form';
import InputEmail from 'components/InputEmail';
import InputPassword from 'components/InputPassword';
import ButtonSignIn from 'components/ButtonSignIn';
import ModalForgetPassword from 'components/ModalForgetPassword';

enum InputName {
  Email = 'Email',
  Password = 'Password',
}


const LoginPage = () => {

  const [openForgetModal, setOpenForgetModal]=useState(false);


  return (
    <>
      <div className='login-container'>
        <Typography variant="h5">
          Sign in to your account
        </Typography >
        <AdditionalButtonsSignIn />
        <div className='lines-container'>
          <span></span>
          or Sign in with Email
          <span></span>
        </div>
        <Form >
          <InputEmail name={InputName.Email} type='email' placeholder='Email' />
          <InputPassword name={InputName.Password} type='password' placeholder='Password' />
          <div className='text-forgot'>
            <span className='link' onClick={() => setOpenForgetModal(true)}>
              Forgot password?
            </span>
          </div >
          <ButtonSignIn />
        </Form>
        {openForgetModal && <ModalForgetPassword open={openForgetModal} onClose={(open)=>setOpenForgetModal(open)}/>}
        <p>
          Don't have an account?
          <span className='link'>
            Join now
          </span>
        </p>
      </div>
    </>
  )

}

export default LoginPage;