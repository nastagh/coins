import React from "react";



const ButtonSignIn = () => {
  return (
    <React.Fragment>
      <button type='submit' className='sign-in-button-color sign-in-button' onClick={() => console.log('sign in')}>
        Sign in
      </button>
    </React.Fragment>
  )
}

export default ButtonSignIn;