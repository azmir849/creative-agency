import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Header from '../Header/Header';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeFooter from '../HomeFooter/HomeFooter';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceSponsors from '../ServiceSponsors/ServiceSponsors';


const Home = () => {
    return (
        <div>
          <Header></Header>
          <ServiceSponsors></ServiceSponsors>
          <ServiceCard></ServiceCard>
          <HomeCarousel></HomeCarousel>
          <ClientsFeedback></ClientsFeedback>
          <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;