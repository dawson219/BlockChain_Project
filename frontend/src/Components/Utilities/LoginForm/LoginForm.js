import React, {useState} from 'react'
import "./LoginForm.css"
import { Link } from 'react-router-dom'

function LoginForm() {
    const [emailValue , setEmailValue] = useState("")
    const [passwordValue , setPasswordValue] = useState("")
  return (
    <div className="loginContainer">
        <div className="loginForm">
            <div className="Heading">
                Sign In
            </div>
            <div className="emailHeader">
                Email
            </div>
            <div className="emailInput">
                <input 
                    type="email" 
                    name="" 
                    className={"emailInputField"}
                    value={emailValue}
                    onChange={(e)=>{setEmailValue(e.target.value)}}
                />
            </div>
            <div className="passwordHeader">
                Password
            </div>
            <div className="passwordInput">
                <input 
                    type="password" 
                    name="" 
                    className='passwordInputField'
                    value={passwordValue}
                    onChange={(e)=>{setPasswordValue(e.target.value)}} 
                />
            </div>
            <div className="SigninButton">
                <Link to={"/home"} style={{textDecoration: "none"}}>
                    <div className="SigninBtn">
                        Sign in
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginForm