import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'

const ClientOrderReview = () => {
    const [review, setReview] = useState({});

    const handleBlur = e => {
        const newReview = { ...review };
       newReview[e.target.name] = e.target.value;
        setReview(newReview);
        console.log(newReview)
    }

    const handleSubmit = () => {
        const newOrderReview = { ...review };
        fetch('http://localhost:5000/addAReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrderReview),
        })

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="LOGO" src={LOGO} alt="" />
                    <h6 ><Link to="/serviceList">Order</Link></h6>
                    <h6 > <Link to="/addService">Service list</Link></h6>
                    <h6 > <Link to="/makeAdmin">Review</Link></h6>
                </div>
                <div class="col-md-8 ">
                    <h6 className="">Order</h6>
                    <h6 className="d-flex AdminName justify-content-end">Pro Rasel</h6>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Company's name . Designation" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientOrderReview;