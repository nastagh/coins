import React from 'react';

type InputEmailType = {

  name: string,
  type?: string,
  placeholder: string
  className: string
}

const InputEmail: React.FC<InputEmailType> = (props) => {
  return <input {...props} className={props.className} type={props.type ? props.type : 'email'}/>;
};

export default InputEmail;