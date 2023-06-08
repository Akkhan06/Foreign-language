import React from 'react';
import Hero from '../../components/Hero/Hero';
import Classes from '../../components/Classes/Classes';
import Instructor from '../../components/Instructor/Instructor';
import FeedBack from '../../components/Feedback/FeedBack';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Classes/>
            <Instructor/>
            <FeedBack/>
        </div>
    );
};

export default Home;