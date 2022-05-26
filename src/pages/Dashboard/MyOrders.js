import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [purchase, setPurchase] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPurchase(data));
        }

    }, [user])
    return (
        <div>
            <h2>Orders Page:{purchase.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchase.map((part,index)=><tr>
                                <th>{index+1}</th>
                                <td>{part.userName}</td>
                                <td>{part.part}</td>
                                <td>{part.minQty}</td>
                                <td>{part.price}</td>
                                
                            </tr>)
                       }
                        
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;