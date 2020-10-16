import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import LOGO from '../../../../images/logos/logo.png'
import ClientOrderServiceListDetails from '../ClientOrderServiceListDetails/ClientOrderServiceListDetails';

const ClientOrderServiceList = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'http://localhost:5000/Service';
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [id]);
    console.log(serviceData)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="LOGO" src={LOGO} alt="" />
                    <h6 className="OrderIcon" ><Link to="/order">Order</Link></h6>
                    <h6 className="ServiceListIcon" > <Link to="/orderList">Service list</Link></h6>
                    <h6 className="reviewIcon"> <Link to="/orderReview">Review</Link></h6>
                </div>
                <div class="col-md-8 ">
                    <h6 className="">Order</h6>
                    <h6 className="d-flex AdminName justify-content-end">{loggedInUser.name}</h6>
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