import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate, Link } from 'react-router-dom'
import Blur from '../assets/images/hero-bg.png'
import Validation from '../utils/SignupValidation';
import draw2 from '../assets/images/draw2.webp'
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const history = useNavigate();

    let handleSubmit = async (e) =>{
    // async function handleSubmit(e){    
          try {
            e.preventDefault();

            setErrors(Validation({
              name: name,
              email:email,
              password:password
            }));
            
            await axios.post("http://localhost:9000/users/store", {
                    name, email, password
            })
            
              .then(res =>{
                if(res.data == "exist"){
                  alert("user already exists")
                }
                else if(res.data == "notexist"){
                  alert("Signup success")
                  history("/users/login")
                }
              })
              .catch(e =>{
                  alert("wrong details") 
                  console.log(e)
              })

          } catch (e) {
            console.log(e);
          }
      }
    
    
  return (
     <div className='position-relative w-100'>
      <img className='w-100' style={{ height: '500px' }} src={Blur} alt=''/>
          <div className='position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
          <img className='w-50 d-flex justify-content-center align-items-center mb-5'  src={draw2}  alt=''/>
              <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
              <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>REGISTER</strong></h2>
                <form method='POST' >
                  <div className='mb-3'>
                      <label htmlFor='name'> <strong>Name</strong></label>
                      <input
                          type="text"
                          placeholder="Enter your name"
                          className="form-control rounded-0"
                          name="name"
                          onChange={(e) => {setName(e.target.value )}}
                        />
                          {errors.name && <span className="text-danger">{errors.name} </span>} 
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='email'> <strong>Email</strong></label>
                      <input
                          type="email"
                          placeholder="Enter your email"
                          className="form-control rounded-0"
                          name="email"
                          onChange={(e) => {setEmail(e.target.value) }}
                        />
                        {errors.email && <span className="text-danger">{errors.email} </span>}
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='password'> <strong>Password</strong></label>
                      <input
                          type="password"
                          placeholder="Enter your password"
                          className="form-control rounded-0"
                          name="password"
                          onChange={(e) => {setPassword(e.target.value)}}
                        />
                        {errors.password && <span className="text-danger">{errors.password} </span>}
                  </div>
                  <button type='submit' onClick={handleSubmit} className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Register</button>
                  <p className='text-black-50'>You are agree to aour terms and policies</p>
                  <div className='d-flex'>
                      <p className='mt-2'>Have an account?</p>
                      <Link to="/users/login" className='text-primary mt-2'> Login here</Link>
                  </div>
              </form>
              </div>
          </div>
      </div>
  )
}


export default Signup




// import React, { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom'
// import Blur from '../assets/images/hero-bg.png'
// import Validation from '../utils/SignupValidation';
// import draw2 from '../assets/images/draw2.webp'
// import axios from 'axios';

// const Signup = () => {

//     // const [values, setValues] = useState({
//     //   name: '',
//     //   email: '',
//     //   password: ''
//     // })
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPass] = useState('')
//     let submit = async (e)=>{
//         e.preventDefault()
//         alert("Submit success")
//             try{
//                 await axios.post("http://localhost:9000/users/store",{
//                     name,
//                     email,
//                     password
//                 })
//                 // setErrors(Validation(values))
//                 // console.log('Submit')
//             }
//             catch(e){
//                 console.log(e)
//             }
//     }
//     // const [errors, setErrors] = useState({})

//     // const handleInput = (e) => {
//     //     setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
        
//     // }
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     setErrors(Validation(values))
//     //     console.log('Submit')
//     // }
    
//   return (
//      <div className='position-relative w-100'>
//       <img className='w-100' style={{ height: '500px' }} src={Blur} alt=''/>
//           <div className='position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
//           <img className='w-50 d-flex justify-content-center align-items-center mb-5'  src={draw2}  alt=''/>
//               <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
//               <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>REGISTER</strong></h2>
//                 <form method='POST' >
//                   <div className='mb-3'>
//                       <label htmlFor='name'> <strong>Name</strong></label>
//                       <input type="text" placeholder='Enter your name' 
//                       className='form-control rounded-0' name='name' 
//                       onChange={(e) => {setName(e.target.value)}} />
//                        {/* {errors.name &&<span className='text-danger'>{errors.name} </span>}  */}
//                   </div>
//                   <div className='mb-3'>
//                       <label htmlFor='email'> <strong>Email</strong></label>
//                       <input type="email" placeholder='Enter your email' 
//                       className='form-control rounded-0' name='email' 
//                       onChange={(e) => {setEmail(e.target.value)} }/>
//                       {/* {errors.email &&<span className='text-danger'>{errors.email} </span>} */}
//                   </div>
//                   <div className='mb-3'>
//                       <label htmlFor='password'> <strong>Password</strong></label>
//                       <input type="password" placeholder='Enter your password' 
//                       className='form-control rounded-0' name='password' 
//                       onChange={(e) => {setPass(e.target.value)}}/>
//                       {/* {errors.password &&<span className='text-danger'>{errors.password} </span>} */}
//                   </div>
//                   <button type='submit' onClick={submit} className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Register</button>
//                   <p className='text-black-50'>You are agree to aour terms and policies</p>
//                   <div className='d-flex'>
//                       <p className='mt-2'>Have an account?</p>
//                       <Link to="/users/login" className='text-primary mt-2'> Login here</Link>
//                   </div>
//               </form>
//               </div>
//           </div>
//       </div>
//   )
// }


// export default Signup