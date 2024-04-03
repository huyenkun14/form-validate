// ** React Imports
import React from 'react'

// ** Styles Imports
import './form.css'

// ** Third party Imports
import { useFormik } from 'formik';

// ** Utils Imports
import { validateEmail, validatePassword } from '../utils/validation';

interface IAccount {
  firstName: string
  lastName: string
  email: string
  password: string
  rePassword: string
  checked: any
}

const FormikValidation: React.FC<{}> = () => {

  // init state
  const initAccount: IAccount = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    checked: false,
  }

  const validateForm = (values: IAccount) => {
    if (values.firstName === '' || values.lastName === '' || values.email === '' || values.password === '' || values.rePassword === '') {
      alert('(formik) Điền đủ các trường!')
    }
    else if (!validateEmail(values.email)) {
      alert('(formik) Email sai định dạng!')
    }
    else if (!validatePassword(values.password)) {
      alert('(formik) Mật khẩu phải có ít nhất 8 kí tự và chứa kí tự đặc biệt!')
    } else if (values.password !== values.rePassword) {
      alert('Mật khẩu nhập lại không trùng khớp')
    }
    else {
      alert('(formik) Đăng kí thành công!')
    }
  }

  const formik = useFormik({
    initialValues: initAccount,
    onSubmit: validateForm
  });

  return (
    <div className="register-form">
      <h1>Create your account <span style={{ fontSize: '14px' }}>Formik</span></h1>
      <p>Fill the form below to create an account.</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="register-form-row">
          <div className="register-form-item">
            <label className="register-form-label">First name*</label>
            <div className="register-form-input">
              <input
                type='text'
                name='firstName'
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
          </div>
          <div className="register-form-item">
            <label className="register-form-label">Last name*</label>
            <div className="register-form-input">
              <input
                type='text'
                name='lastName'
                onChange={formik.handleChange}
                value={formik.values.lastName}
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
                onChange={formik.handleChange}
                value={formik.values.email}
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
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
          </div>
          <div className="register-form-item">
            <label className="register-form-label">Password confimation*</label>
            <div className="register-form-input">
              <input
                type='password'
                name='rePassword'
                onChange={formik.handleChange}
                value={formik.values.rePassword}
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
            type="checkbox"
            name="checked"
            id="checked"
            onChange={formik.handleChange}
            value={formik.values.checked}
          />
          <p>I have read, understood and accept the terms and conditions.</p>
        </div>
        <button id="register-form-button" type='submit'>
          Next
        </button>
      </form>
    </div>
  )
}

export default FormikValidation