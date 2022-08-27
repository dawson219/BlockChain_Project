import React from 'react'
import "./HomeMain.css"
import { Link } from 'react-router-dom'

const HomeMain = ()=> {
  return (
    
    <div className="mainContainer">
        <div className="ImageContainer">
            <div className="centerImageDiv">
                <img src="./Assets/finalLogo.png" className='MainImage' alt="" />
            </div>
        </div>
        <div className="ButtonData">
            <div className="centerDiv">
                <div className="mainHeading">
                    Block Vote
                </div>
                <div className="mainText">
                    Welcome to Block Vote, <br />
                    Create a new Election or Vote in any election in a completely secure and fair process. 
                </div>
                <div className="mainButtonContainer">
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                    <div className="mainButton">
                        Enter Site
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeMain