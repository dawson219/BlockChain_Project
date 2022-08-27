import React from 'react'
import "./Home.css"
import Navbar from '../../Utilities/Navbar/Navbar'
import HomeMain from '../../Utilities/HomeMain/HomeMain'

const Home = ()=> {
  return (
    <div className="HomeContainer">
      <Navbar/>
      <HomeMain/>
    </div>
  )
}

export default Home