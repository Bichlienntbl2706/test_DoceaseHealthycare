import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import avtProfile from '../assets/images/hero-img02.png'

const Profile = () =>{
    return(

     <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={avtProfile}/><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
            </div>
            <div className="col-md-5 border-right">
                <div className="mb-2">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right"><b>Profile Settings</b></h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12"><label className="pt-1 pb-1">FullName</label><input type="text" className="form-control" placeholder="Enter your name" value=""/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"><label className="pt-1 pb-1">Mobile Number</label><input type="text" className="form-control" placeholder="Enter phone number" value=""/></div>
                        <div className="col-md-12"><label className="pt-1 pb-1">Address</label><input type="text" className="form-control" placeholder="Enter your address" value=""/></div>
                        <div className="col-md-12"><label className="pt-1 pb-1">Job</label><input type="text" className="form-control" placeholder="Enter your job" value=""/></div>
                        <div className="col-md-12"><label className="pt-1 pb-1">Relative's Phone Number</label><input type="text" className="form-control" placeholder="Enter relative's phone number" value=""/></div>
                        <div className="col-md-12"><label className="pt-1 pb-1">Relative's Address</label><input type="text" className="form-control" placeholder="Enter relative's address" value=""/></div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="col-md-3 border-right">
                <div className="mb-3"><b>Change Password</b></div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className='pb-1'>Current Password</label>
                                <input className="form-control" type="password" placeholder="••••••"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className='p-1'>New Password</label>
                                <input className="form-control" type="password" placeholder="••••••"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label className='p-1'>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                <input className="form-control" type="password" placeholder="••••••"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="mt-2 text-center"><button className="text-white bg-primary p-2 rounded" type="button">Save Profile</button></div>
    </div>
   
        
  )
}

export default Profile