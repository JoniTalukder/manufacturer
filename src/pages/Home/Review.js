import React from 'react';

const Review = ({ review }) => {
    const { rating, description } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{rating}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;