import React, { useContext,useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import {RecoveryContext} from '../routes/Routers'

function Login () {

  const { setEmails, setPage, emails, setOTP } = useContext(RecoveryContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const history = useNavigate();

  async function nagigateToOtp() {
    if (emails) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);

     await axios .post("http://localhost:9000/send_recovery_email", {
          OTP,
          recipient_email: emails,
        })
        .then(() => setPage("otp"))
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }

 async function  handleSubmit (e) {
      e.preventDefault()
      console.log("Email: " + emails +"\n"+"Password: " + password )
      // setErrors(Validation({
      //   email: email,
      //   password: password
      // }))
      try{
          await axios.post('http://localhost:9000/users/login',{
            emails, password
          })
          .then(res =>{
            if(res.data == "exist"){
                history("/home")
                alert("Email: " + emails +"\n"+"Password: " + password );
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
    <div className='w-100'>
            <div className='w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
              <img className='w-50 ' src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='' />
                <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
                  <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>LOGIN</strong></h2>
                    <form method='POST'>
                        <div className='mb-3'>
                            <label htmlFor='email'> <strong>Email</strong></label>
                            <input type="email" placeholder='Enter your email' 
                            className='form-control rounded-0' name='email'
                            onChange={(e) => setEmails(e.target.value)}
                            />
                            {errors.email &&<span className='text-danger'>{errors.email} </span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'> <strong>Password</strong></label>
                            <input type="password" placeholder='Enter your password' 
                            className='form-control rounded-0' name='password'
                            onChange={(e) => {setPassword(e.target.value)}}
                            />

                            {errors.password &&<span className='text-danger'>{errors.password} </span>}
                        </div>
                        <div className="form-group form-check">
                            <input
                                  type="checkbox"
                                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                  id="exampleCheck2"
                                />
                              <label
                                  className="form-check-label inline-block text-gray-800"
                                  htmlFor="exampleCheck2" >
                                  Remember me
                              </label>
                        </div>
                        <button type='submit' onClick={handleSubmit} className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Login</button>
                        <Link to="#" onClick={() => nagigateToOtp()}  className='text-primary'>Forgot password?</Link>
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

// import React, { useContext } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import {Link } from 'react-router-dom'
// import axios from 'axios'
// import {RecoveryContext} from '../routes/Routers'


// function Login () {

//   const { setEmails, setPage, emails, setOTP } = useContext(RecoveryContext);

//   async function nagigateToOtp() {
//     if (emails) {
//       const OTP = Math.floor(Math.random() * 9000 + 1000);
//       console.log(OTP);
//       setOTP(OTP);

//      await axios .post("http://localhost:9000/send_recovery_email", {
//           OTP,
//           recipient_email: emails,
//         })
//         .then(() => setPage("otp"))
//         .catch(console.log);
//       return;
//     }
//     return alert("Please enter your email");
//   }
//   return (
//     <div>
//       <section className="h-screen">
//         <div className="px-6 h-full text-gray-800">
//           <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
//             <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
//               <img
//                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//                 className="w-full"
//                 alt="Sample image"
//               />
//             </div>
//             <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
//               <form>
//                 <div className="mb-6">
//                   <input
//                     onChange={(e) => setEmails(e.target.value)}
//                     type="text"
//                     className="form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Email address"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <input
//                     type="password"
//                     className="form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                     placeholder="Password"
//                   />
//                 </div>

//                 <div className="flex justify-between items-center mb-6">
//                   <div className="form-group form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
//                       id="exampleCheck2"
//                     />
//                     <label
//                       className="form-check-label inline-block text-gray-800"
//                       htmlFor="exampleCheck2"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <a
//                     href="#"
//                     onClick={() => nagigateToOtp()}
//                     className="text-gray-800"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>

//                 <div className="text-center lg:text-left">
//                   <button
//                     type="button"
//                     className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//                   >
//                     Login
//                   </button>
//                   <p className="text-sm font-semibold mt-2 pt-1 mb-0">
//                     Don't have an account?
//                     <Link
//                       to="/users/register"
//                       className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
//                     >
//                       Register
//                     </Link>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );


// }

// export default Login