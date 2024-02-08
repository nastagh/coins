import React from 'react';

const InputPassword: React.FC<{ name: string; type: string; placeholder: string }> = (props) => {
  return (
    <>
      <div className='password-container'>
        <input {...props} className='form-input'/>
        <img alt='eye' title='eye' src='../assets/images/show.svg' className='password-img' />
      </div>
    </>

  )

};

export default InputPassword;