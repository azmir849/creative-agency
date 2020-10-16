import React, { useEffect, useState } from 'react';
import './ClientsFeedback.css'
import { useParams } from 'react-router-dom';
import ClientsFeedbackDetails from '../ClientsFeedbackDetails/ClientsFeedbackDetails';

const ClientsFeedback = () => {
    const { id } = useParams();
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const url = 'https://intense-reef-83461.herokuapp.com/Review';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviewData(data));
    }, [id]);
    console.log(reviewData)

    return (
        <section className="reviews-container mt-5">
            <div className="text-center">
                <h2 className="reviewTitle">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-95 feedBackArea row pt-2">
                    {
                        reviewData.map(review => <ClientsFeedbackDetails review={review} key={review.title}></ClientsFeedbackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;