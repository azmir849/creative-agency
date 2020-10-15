import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'

const MakeAdmin = () => {
    const[admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
        console.log(newAdmin)
    }

    const handleSubmit = () => {
        const newServiceAdmin ={...admin};
        fetch('http://localhost:5000/addaAdmin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newServiceAdmin),
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
                  <h6 className="">Add Services</h6>
                  <h6 className="d-flex AdminName justify-content-end">Sufi Ahamed</h6>
            
           
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Email</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="xyz@gmail.com" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>   
               </div>
            </div>    
        </div>
    );
};

export default MakeAdmin;