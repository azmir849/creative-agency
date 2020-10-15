import React from 'react';
import './ServiceListDetails.css'

const ServiceListDetails = ({ order }) => {
    return (
        <div>
            <table>
                <tr>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.design}</td>
                    <td>{order.details}</td>
                    <td>pending/done</td>
                </tr>
            </table>
        </div>
    );
};

export default ServiceListDetails;