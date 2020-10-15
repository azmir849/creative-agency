import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'
import ClientOrderServiceListDetails from '../ClientOrderServiceListDetails/ClientOrderServiceListDetails';

const ClientOrderServiceList = () => {
    const {id} = useParams();
    const[serviceData,setServiceData] = useState([]);

    useEffect(() =>{
        const url = 'http://localhost:5000/Service';
        fetch(url)
        .then(res => res.json())
        .then(data => setServiceData(data));
    } , [id]);
    console.log(serviceData)
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
                    <div className="">
                        <div className="w-95 row">
                            {
                                serviceData.map(service => <ClientOrderServiceListDetails service={service} key={service.title}></ClientOrderServiceListDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOrderServiceList;