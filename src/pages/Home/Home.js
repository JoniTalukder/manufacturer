import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12'>
                <Parts></Parts>
                <Reviews></Reviews>
                <BusinessSummary></BusinessSummary>
                <ContactForm></ContactForm>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;
