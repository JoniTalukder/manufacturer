import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserInfo from './UserInfo';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://aqueous-journey-20834.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>All Users:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserInfo key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserInfo>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;