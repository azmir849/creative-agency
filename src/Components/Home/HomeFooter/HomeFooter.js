import React, { useState } from 'react';
import './HomeFooter.css'

const HomeFooter = () => {
    const [message, setMessage] = useState({});

    const handleBlur = e => {
        const newMessage = { ...message };
        newMessage[e.target.name] = e.target.value;
        setMessage(newMessage);
        console.log(newMessage)
    }

    const handleSubmit = () => {
        const newHomeMessage = { ...message };
        fetch('https://intense-reef-83461.herokuapp.com/addAMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHomeMessage),
        })

    }
    return (
        <div className="FooterArea">
            <div className=" row Content">
                <div className="col-md-5">
                    <div className="ContentArea">
                        <h2> Let us handle your<br />project,professionally</h2>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque sunt veniam vero aliquid, voluptatum cupiditate dolore delectus unde quaerat.</small>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ContentArea InputArea">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} type="textArea"  className="form-control" name="description" placeholder="Your message" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                    <div className="footer">
                        <p>Copyright© azmir15-849@diu.edu.bd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooter;