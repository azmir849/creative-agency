import React, { useState } from 'react';
import './AddService.css'
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'

const AddService = () => {
    const[info, setInfo] = useState({});
    const[file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

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
            
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Enter Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Icon</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="image" placeholder="Upload image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Enter Designation" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               </div>
            </div>    
        </div>
    );
};

export default AddService;