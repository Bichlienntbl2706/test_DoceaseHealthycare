import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate, Link } from 'react-router-dom'
import Blur from '../assets/images/hero-bg.png'
import Validation from '../utils/LoginValidation'
import axios from 'axios'

const Login = () => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  // const handleInput = (e) => {
  //     setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  // }

  const history = useNavigate();
 async function  handleSubmit (e) {
      e.preventDefault()
      
      setErrors(Validation({
        email: email,
        password: password
      }))
      try{
          await axios.post('http://localhost:9000/users/login',{
            email, password
          })
          .then(res =>{
            if(res.data == "exist"){
                history("/home")
            }
            else if(res.data == "notexist"){
                alert("user have not sign up")
                history("/users/register")
            }
          })
          .catch(e =>{
            alert("wrong details")
            console.log(e)
          })
      }catch(e){
          console.log(e)
      }
  }


  return (
    <div className='position-relative w-100'>
        <img className='w-100' style={{ height: '500px' }} src={Blur} alt=''/>
            <div className='position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
              <img className='w-50' src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='' />
                <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
                  <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>LOGIN</strong></h2>
                    <form method='POST'>
                        <div className='mb-3'>
                            <label htmlFor='email'> <strong>Email</strong></label>
                            <input type="email" placeholder='Enter your email' 
                            className='form-control rounded-0' name='email'
                            onChange={(e) => {setEmail(e.target.value)}}/>
                            {errors.email &&<span className='text-danger'>{errors.email} </span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'> <strong>Password</strong></label>
                            <input type="password" placeholder='Enter your password' 
                            className='form-control rounded-0' name='password'
                            onChange={(e) => {setPassword(e.target.value)}}/>
                            {errors.password &&<span className='text-danger'>{errors.password} </span>}
                        </div>
                        <button type='submit' onClick={handleSubmit} className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Login</button>
                        <Link to="/forgotpass" className='text-primary'>Forgot password?</Link>
                        <div className='d-flex'>
                          <p className='mt-2'>Don't have an account?</p>
                          <Link to="/users/register" className='text-primary mt-2'> Register here</Link>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    
  )
}

export default Login
