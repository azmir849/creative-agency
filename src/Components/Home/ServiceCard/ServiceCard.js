import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ServiceCard.css"
import ServiceCardDetails from '../ServiceCardDetails/ServiceCardDetails';

const ServiceCard = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        const url = 'https://intense-reef-83461.herokuapp.com/Service';
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [id]);
    console.log(serviceData)
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className="ServiceTitle">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row pt-2">
                    {
                        serviceData.map(service => <ServiceCardDetails service={service} key={service.title}></ServiceCardDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;