import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12'>
                <BusinessSummary></BusinessSummary>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;
