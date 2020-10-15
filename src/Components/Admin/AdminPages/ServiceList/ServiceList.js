import React, { useEffect, useState } from 'react';
import './ServiceList.css'
import { Link, useParams } from 'react-router-dom';
import LOGO from '../../../../images/logos/logo.png'
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

const ServiceList = () => {
    const { id } = useParams();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/Order';
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderData(data));
    }, [id]);
    console.log(orderData)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="LOGO" src={LOGO} alt="" />
                    <h6 ><Link to="/serviceList">Service list</Link></h6>
                    <h6 > <Link to="/addService">Add Service</Link></h6>
                    <h6 > <Link to="/makeAdmin">Make Admin</Link></h6>
                </div>
                <div class="col-md-8 ">
                    <h6 className="">Add Services</h6>
                    <h6 className="d-flex AdminName justify-content-end">Sufi Ahamed</h6>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Status</th>
                        </tr>
                    </table>
                    <div>
                        {
                            orderData.map(order => <ServiceListDetails order={order} key={order.title}></ServiceListDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;