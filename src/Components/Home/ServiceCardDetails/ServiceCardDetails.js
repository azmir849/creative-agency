import React from 'react';
import './ServiceCardDetails.css'

const ServiceCardDetails = ({service}) => {
    return (
         <div className="col-md-3 text-center card justify-content-center">
            <img style={{width:'50px',}} src={service.photo} alt="" />
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
         </div>
    );
};

export default ServiceCardDetails;