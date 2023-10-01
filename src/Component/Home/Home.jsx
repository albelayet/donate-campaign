import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <HomeCard cards={cards}></HomeCard>
        </div>
    );
};

export default Home;