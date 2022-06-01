import React from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [review] = useReview();
    return (
        <div id='review' className='my-28 text-center'>
            <h2 className='text-primary text-4xl font-bold uppercase'>Our Review</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    review?.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;