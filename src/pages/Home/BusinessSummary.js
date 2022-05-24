import React from 'react';
import customer from '../../assets/images/people1.png';
import Business from './Business';

const BusinessSummary = () => {
    const businessSummary = [
        {
            _id: 1,
            img: customer,
            number: '100+',
            about: 'Customers'
        },
        {
            _id: 2,
            img: customer,
            number: '120M+',
            about: 'Annual revenue'
        },
        {
            _id: 3,
            img: customer,
            number: '33K+',
            about: 'Reviews'
        },
        {
            _id: 4,
            img: customer,
            number: '50+',
            about: 'Tools'
        }

    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary text-4xl font-bold uppercase'>Business Summary</h2>
                <h3 className='text-xl font-bold'>Our Happy Client</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    businessSummary.map(business => <Business
                        key={business._id}
                        business={business}
                    ></Business>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;