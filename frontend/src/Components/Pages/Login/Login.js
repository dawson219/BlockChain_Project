import React from 'react'
import "./Login.css"
import Navbar from '../../Utilities/Navbar/Navbar'
import LoginForm from '../../Utilities/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className="LoginContainer">
      <Navbar login={false} />
      <LoginForm/>
    </div>
  )
}

export default Login