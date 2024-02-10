import React, { useState } from 'react';
import { passwordEyes } from 'utils/info';




const InputPassword: React.FC<{ name: string; placeholder: string; className: string }> = (props) => {
  const [openEye, setOpenEye] = useState(true);

  return (
    <>
      <div className='password-container'>
        <input {...props} type={openEye ? 'password': 'text'} className={props.className}/>
        <img alt='eye' title='eye' src={openEye ? passwordEyes.eyeOpen: passwordEyes.eyeClose} 
        className='password-img' onClick={() => setOpenEye(!openEye)}/>
      </div>
    </>
  )
};

export default InputPassword;