import React from 'react';

// type InputEmailType = {

//   name: string,
//   type: string,
//   placeholder: string
//   onChange: 
// }

const InputEmail: React.FC<{ name: string; type: string; placeholder: string }> = (props) => {
  return <input {...props} className='form-input'/>;
};

export default InputEmail;