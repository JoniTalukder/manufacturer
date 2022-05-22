import React from 'react';

const Business = ({ business }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={business.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{business.number}</h2>
                <p>{business.about}</p>
            </div>
        </div>
    );
};

export default Business;