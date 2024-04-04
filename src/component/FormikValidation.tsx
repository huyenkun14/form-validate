// ** React Imports
import React, { useContext } from 'react'

// ** Styles Imports
import './form.css'

// ** Third party Imports
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../context/ThemeProvider';
import { ThemeContext } from '../context/ThemeProvider';

interface IAccount {
  firstName: string
  lastName: string
  email: string
  password: string
  rePassword: string
  checked: boolean
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

  // state
  const { handleChangeTheme, themeMode, defaultColors } = useContext(ThemeContext)

  const handleToggleTheme = (theme: string) => {
    handleChangeTheme(theme)
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Tối thiểu 8 kí tự!').matches(/[!@#$%^&*]/, 'Phải có kí tự đặc biệt!').required('Required'),
    rePassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không trùng khớp!'),
  });

  return (
    <div className="register-form" style={defaultColors}>
      <h1>Create your account <span style={{ fontSize: '14px' }}>Formik</span></h1>
      <p>Fill the form below to create an account.</p>
      <Formik
        initialValues={initAccount}
        validationSchema={SignupSchema}
        onSubmit={values => {
          alert('Đăng kí thành công!');
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="register-form-row">
              <div className="register-form-item">
                <label className="register-form-label">First name*</label>
                <div className="register-form-input">
                  <Field
                    type='text'
                    name='firstName'
                  />
                </div>
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>
              <div className="register-form-item">
                <label className="register-form-label">Last name*</label>
                <div className="register-form-input">
                  <Field
                    type='text'
                    name='lastName'
                  />
                </div>
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="register-form-row">
              <div className="register-form-item">
                <label className="register-form-label">Email*</label>
                <div className="register-form-input">
                  <Field
                    type='text'
                    name='email'
                  />
                </div>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="register-form-row">
              <div className="register-form-item">
                <label className="register-form-label">Password*</label>
                <div className="register-form-input">
                  <Field
                    type='password'
                    name='password'
                  />
                </div>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
              <div className="register-form-item">
                <label className="register-form-label">Password confimation*</label>
                <div className="register-form-input">
                  <Field
                    type='password'
                    name='rePassword'
                  />
                </div>
                {errors.rePassword && touched.rePassword ? (
                  <div>{errors.rePassword}</div>
                ) : null}
              </div>
            </div>
            <div className="register-params">
              <p>We want you to know exactly how our service works and why we need your details.</p>
              <p>Please confirm that you have read, understood and accept the terms and conditions.</p>
            </div>
            <div className="register-form-row">
              <Field
                type="checkbox"
                name="checked"
                id="checked"
              />
              <p>I have read, understood and accept the terms and conditions.</p>
            </div>
            <button id="register-form-button" type='submit'>
              Next
            </button>
          </Form>
        )}
      </Formik>
      <div className="theme" style={{ marginTop: '20px' }}>
        <button
          onClick={() => { handleToggleTheme('light') }}
        >light</button>
        <button
          onClick={() => { handleToggleTheme('dark') }}
        >dark</button>
      </div>
    </div>
  )
}

export default FormikValidation