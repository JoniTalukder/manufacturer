import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
    const {name, img, description, min_qty, available_qty, price } = part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img}  alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="card-text">{description}</p>
                <p className="card-text">Min QTY: {min_qty}</p>
                <p className="card-text">Available Qty: {available_qty}</p>
                <p className="card-text">Price: ${price}</p>

                <div class="card-actions justify-center">
                    <Link to={`/purchase/${part._id}`}>
                        <button class="btn btn-primary">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Part;