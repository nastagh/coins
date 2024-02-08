import React from 'react';

const InputEmail: React.FC<{ name: string; type: string; placeholder: string }> = (props) => {
  return <input {...props} className='form-input'/>;
};

export default InputEmail;