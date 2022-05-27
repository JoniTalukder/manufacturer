import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            
        } )
    };
    return (
        <div>
            <h2>Add a Review</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' value={user.displayName} placeholder='Name' {...register("userName")} disabled />
                <input className='mb-2' value={user.email} placeholder='email' {...register("email")} disabled />
                <input className='mb-2' placeholder='Rating' {...register("rating", { required: true, maxLength: 20 })} />

                <textarea className='mb-2' placeholder='Description' {...register("description")} />

                
                <input type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default Review;