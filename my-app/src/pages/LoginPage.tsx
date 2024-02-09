import { Typography } from '@mui/material';
import '../styles/login.scss';
import { ReactNode, useState } from 'react';
import AdditionalButtonsSignIn from 'components/AdditionalButtonsSignIn';
import Form from 'components/Form';
import InputEmail from 'components/InputEmail';
import InputPassword from 'components/InputPassword';
import ButtonSignIn from 'components/ButtonSignIn';
import ModalForgetPassword from 'components/ModalForgetPassword';
import ModalWindow from 'components/ModalWindow';
import ModalEmailVerification from 'components/ModalEmailVerification';
import ModalResetPassword from 'components/ModalResetPassword';

enum InputName {
  Email = 'Email',
  Password = 'Password',
}


const LoginPage = () => {

  // const [openForgetModal, setOpenForgetModal]=useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(<div />);

  // let modalType: ReactNode = <ModalForgetPassword onClose={() => setShowModal(false)}
  //   openNext={(open) => { setShowVerifyModal(open); selectModal() }}
  // />


  // const selectModal = () => {
  //   if (showVerifyModal) {
  //     console.log('hi')
  //     modalType = <ModalEmailVerification onClose={() => setShowModal(false)} />
  //   }
  // }

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
            <span className='link' onClick={() => {
              setShowModal(true);

              setCurrentModal(<ModalForgetPassword onClose={() => setShowModal(false)}
                openNext={() => setCurrentModal(<ModalEmailVerification 
                                                      onClose={() => setShowModal(false)} 
                                                      openNext={() => setCurrentModal(<ModalResetPassword onClose={() => setShowModal(false)}/>)}
                                                      />)}
              />)
            }}>
              Forgot password?
            </span>
          </div >
          <ButtonSignIn />
        </Form>
        {showModal && <ModalWindow open={showModal}>
          {currentModal}
          {/* <ModalForgetPassword onClose={(open) => setShowModal(open)} /> */}
        </ModalWindow>}
        {/* {openForgetModal && <ModalForgetPassword open={openForgetModal} onClose={(open) => setOpenForgetModal(open)}/>} */}
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