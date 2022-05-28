import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-journey-20834.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='my-24'>
            <h2 className='text-4xl text-center uppercase font-bold text-primary'>Vehicle Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts?.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;