import { FormType } from "./FormLogin";
import '../styles/form.scss';
import { AppDispatch } from "store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "pages/HomePage";
import { fetchChangeData } from "services/userSlice";
import { useNavigate } from "react-router-dom";

export type PersonalDataProps = {
  firstName: string,
  lastName: string,
  gender: string,
  accessToken: string
}

const FormPersonData: React.FC<FormType> = ({ children }) => {

   const dispatch: AppDispatch = useDispatch();
   const tokens = useAppSelector(state => state.user.user.tokens)
   const navigate = useNavigate();


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = (new FormData(e.currentTarget as HTMLFormElement));
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const gender = formData.get('gender') as string;
    const accessToken = tokens.accessToken;
    dispatch(fetchChangeData({firstName, lastName, gender, accessToken})).then(() => navigate('/home'))
  }

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormPersonData;