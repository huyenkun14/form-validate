// ** React Imports
import React, { useState } from 'react'

// ** Styles Imports
import './register.css'

// ** Components Imports
import FormikValidation from '../component/FormikValidation'
import FormRegex from '../component/FormRegex'

// ** Images Import
import logo from '../assets/register-logo.png'

const Register: React.FC<{}> = () => {

    const [form, setForm] = useState<string>('1')

    const renderForm = () => {
        if (form === '1') {
            return <FormikValidation />
        } else {
            return <FormRegex />
        }
    }
    return (
        <div className="register">
            <div className="register-content">
                <div className="register-logo">
                    <img src={logo} alt="Logo" srcSet='' />
                </div>
                {renderForm()}
            </div>
            <div className="register-img"></div>
            <div id="button-test">
                <button onClick={() => { setForm('1') }}>Formik</button>
                <button onClick={() => { setForm('2') }}>Regex</button>
            </div>
        </div>
    )
}

export default Register