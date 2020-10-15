import React from 'react';

const ClientsFeedbackDetails = ({ review }) => {
    return (
        <div className="col-md-3 text-center card">
            <div className="row">
                <img style={{ width: '50px' }} src={review.photo} alt="" />
                <div className="col">
                    <h5 className="mt-3">{review.title}</h5>
                    <h6 className="mb-3">{review.designation}</h6>
                </div>
            </div>
            <p className="text-secondary">{review.description}</p>
        </div>
    );
};

export default ClientsFeedbackDetails;