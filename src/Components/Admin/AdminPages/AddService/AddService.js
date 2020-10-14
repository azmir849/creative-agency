import React from 'react';
import './AddService.css'
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'

const AddService = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <img className="LOGO" src={LOGO} alt=""/>
                <h6 ><Link to="/serviceList">Service list</Link></h6>
                <h6 > <Link to="/addService">Add Service</Link></h6>
                <h6 > <Link to="/makeAdmin">Make Admin</Link></h6>
            </div>
            <div class="col-md-8 ">
                  <h6 className="">Add event</h6>
                  <h6 className="d-flex AdminName justify-content-end">Sufi Ahamed</h6>
            
                <div className="servicePostArea">
                    <h6 className="postContent">Service Title</h6>
                    <input className="postContent" type="text" name="title" id="" placeholder="Enter title"/>
                    <h6 className="postContent">Icon</h6>
                    <button className="postContent UploadButton">Upload image</button>
                    <h6 className="postContent">Description</h6>
                    <textarea className="postContent" name="description" id="" cols="40" rows="3" placeholder="Enter Designation"></textarea>
                    <button className="btn-success submitButton">Submit</button>
                 </div>
               </div>
            </div>    
        </div>
    );
};

export default AddService;