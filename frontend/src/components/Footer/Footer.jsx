import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo4.png';
import {AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

const socialLinks = [
  {
    path: "", 
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/> 
  }, 

  {
    path: "", 
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5'/> 
  }, 

  {
    path: "", 
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5'/> 
  }, 

  {
    path: "https://github.com/lehoangnhatlinh/DocEase-Booking", 
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/> 
  }, 
]

const quickLinks01 = [
  {
    path: "/home", 
    display: "Home" 
  }, 

  {
    path: "/doctors", 
    display: "About Us"
  }, 

  {
    path: "/services", 
    display: "Services"
  }, 

  {
    path: "/", 
    display: "Blog"
  }
]

const quickLinks02 = [
  {
    path: "/find-a-doctor", 
    display: "Find a Doctor" 
  }, 

  {
    path: "/", 
    display: "Request an Appointment"
  }, 

  {
    path: "/", 
    display: "Find a Location"
  }, 

  {
    path: "/", 
    display: "Get a Opinion"
  }
]

const quickLinks03 = [
  {
    path: "#", 
    display: "Donate" 
  }, 

  {
    path: "#", 
    display: "Contact Us"
  }
]

const Footer = () => {

  const year = new Date().getFullYear(); 
    
  return (
    <footer className="pb-16 pt-10 shadow-none bg-light rounded">
      <div className="container flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] mt-1 leading-7 font-[400] text-textColor">
              Copyright © {year} developed by G4 in FPTU all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none" 
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>

          <ul>
            {
              quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>
                    {item.display}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>

          <ul>
            {
              quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>
                    {item.display}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>

          <ul>
            {
              quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link className="text-[16px] leading-7 font-[400] text-textColor" to={item.path}>
                    {item.display}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer