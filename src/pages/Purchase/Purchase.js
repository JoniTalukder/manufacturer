import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/parts/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, []);

    const handleUpdatePart = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const min_qty = event.target.min_qty.value;
        const available_qty = event.target.available_qty.value;

        const updatedPart = { name, min_qty, available_qty };

        // send data to the server
        const url = `http://localhost:5000/parts/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPart)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Part Name Updated successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className='flex justify-center' >
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-10">
                <figure><img src={part.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{part.name}</h2>
                    <p className="card-text">{part.description}</p>
                    <p className="card-text">Min QTY: {part.min_qty}</p>
                    <p className="card-text">Available Qty: {part.available_qty}</p>
                    <p className="card-text">Price: ${part.price}</p>
                    <Link to={`/purchase/${part._id}`}>
                        <button class="btn btn-primary">Purchase</button>
                    </Link>
                </div>
            </div>


            <div>
                <form onSubmit={handleUpdatePart} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                    <input type="text" name="name" placeholder='Name' required class="input input-bordered w-full max-w-xs" />
                    <input  type="number" name="min_qty" placeholder='Min Qty' required class="input input-bordered w-full max-w-xs" />
                    <input type="number" name="available_qty" placeholder='Available Qty' required class="input input-bordered w-full max-w-xs" />

                    <input disabled={part.min_qty} type="submit" value="Update" class="btn btn-primary input input-bordered w-full max-w-xs" />
                </form>

                {/* <form className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                    <input type="text" name="name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" placeholder="Type Email" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Type Phone" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Update" class="btn btn-primary input input-bordered w-full max-w-xs" />
                </form> */}
            </div>
        </div>
    );
};

export default Purchase;