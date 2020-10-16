import React, { useContext, useState } from 'react';
import './AddService.css'
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'
import { UserContext } from '../../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

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
        const newServiceInfo = { ...info };
        fetch('https://intense-reef-83461.herokuapp.com/addAService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newServiceInfo),
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className="LOGO" src={LOGO} alt="" />
                    <h6 className="ServiceListIcon"><Link to="/serviceList">Service list</Link></h6>
                    <h6 className="addServiceIcon"> <Link to="/addService">Add Service</Link></h6>
                    <h6 className="adminIcon"> <Link to="/addAdmin">Make Admin</Link></h6>
                </div>
                <div class="col-md-8">
                    <h6 className="">Add Services</h6>
                    <h6 className="d-flex AdminName justify-content-end">{loggedInUser.name}</h6>
                    <div className="ClientServiceInputArea">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Title</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="title" placeholder="Enter title" />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="image">Icon</label>
                                    <input onChange={handleFileChange} type="file" id="SubmitButton" className="form-control btn-success" name="image" placeholder="Upload image" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Description</label>
                                <textarea onBlur={handleBlur} type="textArea" id="inputTextAreaSize" className="form-control" name="description" placeholder="Enter Designation" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-success float-right">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;