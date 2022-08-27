import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ()=> {
  return (
    <div className="NavbarContainer">
        <div className="logoSection" style={{textDecoration: "none"}}>
            <Link to={"/"}>
                <div className="logo">
                    <img src="./Assets/Block_Logo1.png" className='logoImage' alt="" />
                </div>
            </Link>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div className="name">
                    Block Vote
                </div>
            </Link>
        </div>
        <div className="navButtons">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div className="homeBtn">
                    Home
                </div>
            </Link>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div className="aboutBtn">
                    About
                </div>
            </Link>
            <Link to={"/login"} style={{textDecoration: "none"}}>
                <div className="loginBtn">
                    Sign In
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar