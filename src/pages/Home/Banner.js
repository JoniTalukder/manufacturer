import React from 'react';
import image from '../../image/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Our Manufacturer Company</h1>
                    <p className="py-6">Buy and Smile</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;