// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom'
// import Blur from '../assets/images/hero-bg.png'
// import draw2 from '../assets/images/draw2.webp'

// const ForgotPassword = () =>{
//         return(
//                 <div className='position-relative w-100'>
//                     <img className='w-100' style={{ height: '500px' }} src={Blur} alt=''/>
//                         <div className='position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center align-items-center vh-75 pt-4'>
//                         <img className='w-50 d-flex justify-content-center align-items-center mb-5' src={draw2} alt=''/>
//                             <div className='bg-white shadow-lg p-3 mb-5 bg-body rounded w-25'>
//                             <h2 className='d-flex justify-content-center align-items-center text-uppercase fs-2'><strong>GET OTP</strong></h2>
//                                 <form action=''>
//                                     <div className='mb-3'>
//                                         <label className='pb-2 pt-2' htmlFor='email'> <strong>Email</strong></label>
//                                         <input type="email" placeholder='Enter your email' 
//                                         className='form-control rounded-0' name='email'/>
//                                     </div>
//                                     <button type='submit' className='btn btn-primary w-100 p-2 text-white mt-2 mb-2 rounded-0'>Send</button>
//                                     {/* <Link to="/login" className='text-primary mt-2'> Login here</Link> */}
//                                 </form>
//                             </div>
//                         </div>
//                 </div>
//         )
// }
// export default ForgotPassword

import React, { useState,useContext } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import {RecoveryContext} from '../routes/Routers'

 function OTPInput() {
  const { emails, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:9000/send_recovery_email", {
        OTP: otp,
        recipient_email: emails,
      })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has succesfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {
    if (parseInt(OTPinput.join("")) === otp) {
      setPage("reset");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {emails}</p> 
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  
                  <div className="w-16 h-16">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      // name=""
                      // id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>

                  <div className="w-16 h-16">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      // name=""
                      // id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          e.target.value,
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>

                  <div className="w-16 h-16">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      // name=""
                      // id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          e.target.value,
                          OTPinput[3],
                        ])
                      }
                    />
                  </div>

                  <div className="w-16 h-16">
                    <input
                      maxLength="1"
                      className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      // name=""
                      // id=""
                      onChange={(e) =>
                        setOTPinput([
                          OTPinput[0],
                          OTPinput[1],
                          OTPinput[2],
                          e.target.value,
                        ])
                      }
                    />
                  </div>

                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <Link
                      onClick={() => verfiyOTP()}
                      className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </Link>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <Link
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </Link>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTPInput