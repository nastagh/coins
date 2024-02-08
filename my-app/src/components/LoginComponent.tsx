import { Typography } from '@mui/material';
import '../styles/login.scss';
import AdditionalButtonsSignIn from './AdditionalButtonsSignIn';
import ButtonSignIn from './ButtonSignIn';
import Form from './Form';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';

enum InputName {
  Email = 'Email',
  Password = 'Password',
}


const LoginComponent = () => {
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
        <Form>
          <InputEmail name={InputName.Email} type='email' placeholder='Email' />
          <InputPassword name={InputName.Password} type='password' placeholder='Password' />
          <div className='text-forgot'>
            <a href='' className='link' title='forgot'>
              Forgot password?
            </a>
          </div >
          <ButtonSignIn />
        </Form>
        <p>
          Don't have an account?
          <a href='' className='link' title='join'>
            Join now
          </a>
        </p>
      </div>
    </>
  )

}

export default LoginComponent;