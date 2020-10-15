import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'

const ClientOrder = () => {
    const [order, setOrder] = useState({});
    const[file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile)
    }
    
    const handleBlur = e => {
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
        console.log(newOrder)
    }

    const handleSubmit = () => {
        const newClientOrder = { ...order };
        fetch('http://localhost:5000/addAOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newClientOrder),
        })

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="LOGO" src={LOGO} alt="" />
                    <h6 ><Link to="/serviceList">Order</Link></h6>
                    <h6 > <Link to="/addService">Service list</Link></h6>
                    <h6 > <Link to="/makeAdmin">order</Link></h6>
                </div>
                <div class="col-md-8 ">
                    <h6 className="">Order</h6>
                    <h6 className="d-flex AdminName justify-content-end">Pro Rasel</h6>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name/company's name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="design" placeholder="Graphic Design" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="details" placeholder="Project Details" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                        </div>
                        <div className="form-group">
                        <input onChange={handleFileChange} type="file" className="form-control" name="image" placeholder="Upload image" />
                    </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientOrder;