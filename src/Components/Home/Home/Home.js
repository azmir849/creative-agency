import React from 'react';
import Header from '../Header/Header';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceSponsors from '../ServiceSponsors/ServiceSponsors';


const Home = () => {
    return (
        <div>
          <Header></Header>
          <ServiceSponsors></ServiceSponsors>
          <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;