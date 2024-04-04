// ** React Imports
import React, { useState } from 'react'

// ** Styles Imports
import './register.css'

// ** Components Imports
import FormikValidation from '../component/FormikValidation'

// ** Images Import
import logo from '../assets/register-logo.png'

const Register: React.FC<{}> = () => {

    return (
        <div className="register">
            <div className="register-content">
                <div className="register-logo">
                    <img src={logo} alt="Logo" srcSet='' />
                </div>
                <FormikValidation />
            </div>
            <div className="register-img"></div>
        </div>
    )
}

export default Register