import React from "react";
import { useAppSelector } from "./HomePage";
import '../styles/personalDataPage.scss'
import { Typography } from "@mui/material";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { ModalClose } from "@mui/joy";
import FormPersonData from "components/FormPersonData";
import InputDif from "components/InputDif";
import LockField from "components/LockInput";
import GenderInput from "components/GenderInput";
import { useNavigate } from "react-router-dom";

enum DataInputNames {
  userName = 'Username',
  firstName = 'First Name',
  lastName = 'Last Name',
  dateOfBirth ='Date of Birth (DD-MM-YYYY)'
}

const PersonalDataPage = () => {

  const data = useAppSelector(state => state.user.data);
  const navigate = useNavigate();


  return (
    <div className="data-container">
      <div className="data-container-tittle">
        <ArrowLeftIcon onClick={() => navigate('/home')} className="modal-arrow position-relative"/>
        <Typography variant="h6">
          Personal Information
        </Typography>
        <ModalClose variant="plain" className='modal-plane position-relative' onClick={() => navigate('/home')}/>
      </div>
      <FormPersonData>
        <Typography variant="h5">
          Basic Info
        </Typography>
        <LockField name={DataInputNames.userName} value={data.username}/>
        <InputDif name="firstname" placeholder={DataInputNames.firstName} className="form-input" type="text" value={data.firstname}/>
        <InputDif name="lastname" placeholder={DataInputNames.lastName} className="form-input" type="text"value={data.lastname}/>
        <LockField name={DataInputNames.dateOfBirth} value={data.dateOfBirth}/>
        <GenderInput value={data.gender} name='gender'/>
        <button type="submit" className='sign-in-button-color sign-in-button'>
          Save Changes
        </button>
      </FormPersonData>
    </div>
  )
}

export default PersonalDataPage;

// cjkfhkkhh5&