import React from 'react';
import { ReactNode } from 'react';
import '../styles/form.scss';


type FormType = {
  children: ReactNode;
}

const Form: React.FC<FormType> = ({ children }) => {

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const formJson = Object.fromEntries((formData as any).entries());
    // console.log(JSON.stringify(formJson));
    console.log(formJson);
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