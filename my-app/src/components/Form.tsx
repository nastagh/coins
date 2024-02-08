import { ReactNode } from 'react';
import '../styles/form.scss';


type FormType = {
  children : ReactNode;
}

const Form: React.FC<FormType> = ({children}) => {
return(
  <form className="form-container" onSubmit={() => console.log('submitForm')}>
    {children}
  </form>
)
}

export default Form;