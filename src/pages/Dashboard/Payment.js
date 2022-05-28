import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe
    ('pk_test_51L46UtKjpxOVoJezHDlCXAxZXpBcb86KKFEVjnYtjijhlYPMpccg5yB1RBRjPdvMX7t0WRQw5AFCBSFdSYM35won00Fh2TXjuF');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;

    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {purchase.userName}</p>
                    <h2 class="card-title">Please Pay for: {purchase.part}</h2>
                    <p>{purchase.minQty}</p>
                    <p className='text-orange-700'>Please pay: ${purchase.price} Per Unit</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;