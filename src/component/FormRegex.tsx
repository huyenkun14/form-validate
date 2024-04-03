// ** React Imports
import React, { ChangeEvent, useState } from 'react'

// ** Styles Imports
import './form.css'

// ** Utils Imports
import { validateEmail, validatePassword } from '../utils/validation';

interface IAccount {
    firstName: string
    lastName: string
    email: string
    password: string
    rePassword: string
    checked: boolean
}

const FormRegex: React.FC<{}> = () => {

    // init state
    const initAccount: IAccount = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        checked: false,
    }

    // state
    const [accountChange, setAccountChange] = useState<IAccount>(initAccount);

    // onChange input
    const handleAccoutChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target
        if (name === 'checked') {
            setAccountChange({ ...accountChange, [name]: checked })
        } else {
            setAccountChange({ ...accountChange, [name]: value })
        }
    }

    // validate and submit
    const handleRegister = async (e: any) => {
        e.preventDefault()
        if (accountChange.firstName === '' || accountChange.lastName === '' || accountChange.email === '' || accountChange.password === '' || accountChange.rePassword === '') {
            alert('(regex) Điền đủ các trường!')
        }
        else if (!validateEmail(accountChange.email)) {
            alert('(regex) Email sai định dạng!')
        }
        else if (!validatePassword(accountChange.password)) {
            alert('(regex) Mật khẩu phải có ít nhất 8 kí tự và chứa kí tự đặc biệt!')
        } else if (accountChange.password !== accountChange.rePassword) {
            alert('Mật khẩu nhập lại không trùng khớp')
        }
        else {
            alert('(regex) Đăng kí thành công!')
        }
    }

    return (
        <div className="register-form">
            <h1>Create your account  <span style={{ fontSize: '14px' }}>Regex</span></h1>
            <p>Fill the form below to create an account.</p>
            <form onSubmit={handleRegister}>
                <div className="register-form-row">
                    <div className="register-form-item">
                        <label className="register-form-label">First name*</label>
                        <div className="register-form-input">
                            <input
                                type='text'
                                name='firstName'
                                onChange={handleAccoutChange}
                            />
                        </div>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">Last name*</label>
                        <div className="register-form-input">
                            <input
                                type='text'
                                name='lastName'
                                onChange={handleAccoutChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="register-form-row">
                    <div className="register-form-item">
                        <label className="register-form-label">Email*</label>
                        <div className="register-form-input">
                            <input
                                type='text'
                                name='email'
                                onChange={handleAccoutChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="register-form-row">
                    <div className="register-form-item">
                        <label className="register-form-label">Password*</label>
                        <div className="register-form-input">
                            <input
                                type='password'
                                name='password'
                                onChange={handleAccoutChange}
                            />
                        </div>
                    </div>
                    <div className="register-form-item">
                        <label className="register-form-label">Password confimation*</label>
                        <div className="register-form-input">
                            <input
                                type='password'
                                name='rePassword'
                                onChange={handleAccoutChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="register-params">
                    <p>We want you to know exactly how our service works and why we need your details.</p>
                    <p>Please confirm that you have read, understood and accept the terms and conditions.</p>
                </div>
                <div className="register-form-row">
                    <input
                        id="checked"
                        type="checkbox"
                        name="checked"
                        onChange={handleAccoutChange}
                    />
                    <p>I have read, understood and accept the terms and conditions.</p>
                </div>
                <button
                    id="register-form-button"
                    type='submit'
                    value='submit'
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default FormRegex