import React from 'react';
import './ClientOrderServiceListDetails.css'
const ClientOrderServiceListDetails = ({ service }) => {
    return (
        <div className="col-md-4 card">
            <div className="row">
                <img style={{ width: '50px', }} src={service.photo} alt="" />
                <button className="CardBtn">Done</button>
            </div>
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ClientOrderServiceListDetails;