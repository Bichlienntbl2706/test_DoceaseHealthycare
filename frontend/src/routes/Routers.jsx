import React, { useState,createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Doctors from '../pages/Doctors.jsx/Doctor'
import DoctorDetails from '../pages/Doctors.jsx/DoctorDetails'
import Profile from '../pages/Profile'
import OTPInput from '../pages/OTPInput';
import Reset from '../pages/Reset';
import Recovered from '../pages/Recovered';


export const RecoveryContext = createContext();

const Routers = () => {


  const [page, setPage] =  useState('users/login');
  const [emails, setEmails] =  useState();
  const [otp, setOTP] =  useState();

  function NavigateComponents(){
    if(page === "users/login") return <Login/>
    if(page === "otp") return <OTPInput/>
    if(page === "reset") return <Reset />
    return <Recovered />
  }


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctor/:id' element={<DoctorDetails/>} />
      <Route path='/users/login' element={
      <RecoveryContext.Provider value = {{ page, setPage, otp, setOTP, setEmails, emails }}>
          <div className="flex justify-center items-center">
                <NavigateComponents />
          </div>
          {/* <Login/> */}
      </RecoveryContext.Provider>
      } />
      <Route path='/otp' element={<OTPInput/>} />
      <Route path='/users/register' element={<Signup/>} />
      <Route path='/reset' element={<Reset/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/services' element={<Services/>} />
    </Routes>
  )
}

export default Routers