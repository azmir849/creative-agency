import React from 'react';
import './HeaderMain.css'
import headerPhoto from '../../../images/logos/Frame.png'


const HeaderMain = () => {
    return (
        <main style={{height:'400px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{fontWeight:'bolder'}}>Lets Grow Your<br/> Brand To The <br/> Next Level</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas est excepturi explicabo aliquid obcaecati, alias iste eligendi tenetur nihil, rem pariatur cum itaque, laudantium dolore.</p>
            <button className="btn btn-dark HireBtn">Hire us</button>
        </div>
        <div className="col-md-6">
            <img src={headerPhoto} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;