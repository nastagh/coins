import { Typography } from '@mui/material';
import '../styles/login.scss';
import { useState } from 'react';
import AdditionalButtonsSignIn from 'components/AdditionalButtonsSignIn';
import Form from 'components/Form';
import InputEmail from 'components/InputEmail';
import InputPassword from 'components/InputPassword';
import ButtonSignIn from 'components/ButtonSignIn';
import ModalForgetPassword from 'components/passwordsReset/ModalForgetPassword';
import ModalWindow from 'components/passwordsReset/ModalWindow';
import ModalEmailVerification from 'components/passwordsReset/ModalEmailVerification';
import ModalResetPassword from 'components/passwordsReset/ModalResetPassword';

enum InputName {
  Email = 'email',
  Password = 'password',
}

export type PasswordResetData = {
  email?: string, 
  code?: string,
}

const LoginPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [passwordResetData, setPasswordResetData] = useState<PasswordResetData>({});


  const handleNext = (data: PasswordResetData) => {
    setPasswordResetData({...passwordResetData, ...data});
    if (currentStep < steps.length -1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowModal(false);
      setCurrentStep(0);
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const steps = [
    {
      id: 0,
      component: <ModalForgetPassword onSubmit={handleNext}/>
    },
    {
      id: 1,
      component: <ModalEmailVerification onSubmit={handleNext} data={passwordResetData}/>
    },
    {
      id: 2,
      component: <ModalResetPassword onSubmit={handleNext} data={passwordResetData}/>
    }
  ];

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
          <InputEmail name={InputName.Email} placeholder='Email' className='form-input' />
          <InputPassword name={InputName.Password} placeholder='Password' className='form-input' />
          <div className='text-forgot'>
            <span className='link' onClick={() => {
              setShowModal(true);
            }}>
              Forgot password?
            </span>
          </div >
          <ButtonSignIn />
        </Form>
        {showModal && <ModalWindow open={showModal} onClose={() => setShowModal(false)} showBack={currentStep !== 0} onBack={handleBack}>
          {steps[currentStep].component}
        </ModalWindow>}
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