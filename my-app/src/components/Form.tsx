import React from 'react';
import { ReactNode } from 'react';
import '../styles/form.scss';
import { useDispatch } from 'react-redux';
import { fetchLogin } from 'services/userSlice';
import { AppDispatch } from 'store';
import { useNavigate } from 'react-router-dom';


type FormType = {
  children: ReactNode;
}

export type LoginProps = {
  email: string,
  password: string
}

const Form: React.FC<FormType> = ({ children }) => {

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    dispatch(fetchLogin({ email, password })).then(() => navigate('/home'))



    // if (email !== '') {
    //   dispatch(UserApi.login(email,password)).then(() => {
    //     navigate('/home')
    //   })
    // } 


    // console.log(formJson);
  }

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form;