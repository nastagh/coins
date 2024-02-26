import React from 'react';

type InputDifType = {

  name: string,
  type?: string,
  placeholder: string
  className: string,
  value?: string
}

const InputDif: React.FC<InputDifType> = (props) => {
  return <input {...props} className={props.className} type={props.type ? props.type : 'email'}/>;
};

export default InputDif;