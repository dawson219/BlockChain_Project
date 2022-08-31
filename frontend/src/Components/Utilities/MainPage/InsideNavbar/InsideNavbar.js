import React from 'react'
import "./InsideNavbar.css"
import { Link } from 'react-router-dom'

const InsideNavbar = ({ login }) => {
  return (
    <div className='insideNavbarContainer'>
      <div className="menuHeading" style={{ textDecoration: "none" }}>
        Menu
      </div>
      <div className="insidenavButtons">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="insidenavBtn">
            Dashboard
          </div>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="insidenavBtn">
            Candidate List
          </div>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="insidenavBtn">
            Voter List
          </div>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="insidenavBtn">
            Sign out
          </div>
        </Link>
      </div>
    </div>
  )
}

export default InsideNavbar