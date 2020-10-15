import React from 'react';
import './ServiceSponsors.css'
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const ServiceSponsors = () => {
    return (
        <div className="mr-5 d-flex justify-content-center SponsorsContent">
            <img src={slack} alt="" />
            <img src={google} alt="" />
            <img src={uber} alt="" />
            <img src={netflix} alt="" />
            <img src={airbnb} alt="" />
        </div>
    );
};

export default ServiceSponsors;