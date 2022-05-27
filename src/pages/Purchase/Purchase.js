import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { _id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/parts/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, []);

    // const handleUpdatePart = event => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const min_qty = event.target.min_qty.value;
    //     const available_qty = event.target.available_qty.value;

    //     const updatedPart = { name, min_qty, available_qty };

    //     // send data to the server
    //     const url = `http://localhost:5000/parts/${_id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedPart)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('Part Name Updated successfully!!!');
    //             event.target.reset();
    //         })
    // }

    const handlePurchase = event => {
        event.preventDefault();

        const purchase = {
            id: _id,
            userName: user.displayName,
            email: user.email,
            part: part.name,
            minQty: part.min_qty,
            availableQty: part.available_qty,
            price: part.price
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast('Tools Purchase Successfully');
                }

            })

    }



    return (
        <div className='flex justify-center' >
            <div>
                <form onClick={handlePurchase} className='grid grid-cols-1 gap-5  mt-5 mx-10'>
                    <input type="image" src={part.img} alt="" className="input input-bordered w-full h-52 max-w-xs " />
                    <input type="text" name="name" value={user?.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="email" value={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />

                    <input type="text" name="pName" value={part.name || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="description" value={part.description || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="min_qty" value={part.min_qty || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="available_qty" value={part.available_qty || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="available_qty" value={part.price || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Purchase" className="btn btn-primary input input-bordered w-full max-w-xs" />
                </form>
            </div>

            <div>
                {/* <form onSubmit={handleUpdatePart} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                    <input type="text" name="name" value={user?.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="email" value={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="name" placeholder='Name' required className="input input-bordered w-full max-w-xs" />
                    <input type="number" name="min_qty" placeholder='Min Qty' required className="input input-bordered w-full max-w-xs" />
                    <input type="number" name="available_qty" placeholder='Available Qty' required className="input input-bordered w-full max-w-xs" />

                    <input type="submit" value="Update" className="btn btn-primary input input-bordered w-full max-w-xs" />
                </form> */}

            </div>
        </div>
    );
};

export default Purchase;