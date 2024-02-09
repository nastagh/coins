import React from "react";
import { accounts } from "utils/info";


const AdditionalButtonsSignIn = () => {
  return (
    <React.Fragment>
      <div className='sign-in-variants-button-container'>
        {accounts.map(account => 
           (
            <div className='sign-in-button sign-in-button-transparent' key={account.name}>
              <img alt={account.name} title={account.name} src={account.img} className='sign-in-img'>
              </img>
              Sign in with {account.name}
            </div>
          )
        )}
      </div>
    </React.Fragment>
  )
}

export default AdditionalButtonsSignIn;