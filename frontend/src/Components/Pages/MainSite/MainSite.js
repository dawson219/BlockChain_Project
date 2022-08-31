import React from 'react'
import "./MainSite.css"
import Navbar from '../../Utilities/Navbar/Navbar'
import MainPage from '../../Utilities/MainPage/MainPage'

const MainSite = ()=> {
  return (
    <div className='MainSiteContainer'>
      <Navbar login={99}/>
      <MainPage />
      
    </div>
  )
}

export default MainSite