import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import Blur from '../assets/images/hero-bg.png'
import draw2 from '../assets/images/draw2.webp'

const ForgotPassword = () =>{
        return(
                <div className='position-relative w-100'>
                    <img className='w-100' style={{ height: '500px' }} src={Blur} alt=''/>
                        <div className='position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
                        <img className='w-50 d-flex justify-content-center align-items-center mb-5' src={draw2} alt=''/>
                            <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
                            <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>GET OTP</strong></h2>
                                <form action=''>
                                    <div className='mb-3'>
                                        <label className='pb-2 pt-2' htmlFor='email'> <strong>Email</strong></label>
                                        <input type="email" placeholder='Enter your email' 
                                        className='form-control rounded-0' name='email'/>
                                    </div>
                                    <button type='submit' className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Send</button>
                                    {/* <Link to="/login" className='text-primary mt-2'> Login here</Link> */}
                                </form>
                            </div>
                        </div>
                </div>
        )
}
export default ForgotPassword