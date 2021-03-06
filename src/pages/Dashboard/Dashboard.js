import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold uppercase text-primary'>Welcome to Manufacturer Co. Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin &&
                        <li><Link to={"/dashboard"}>My Orders</Link></li>
                    }
                    {!admin &&
                        <li><Link to={"/dashboard/review"}>Review</Link></li>
                    }

                    {admin && <li><Link to={"/dashboard/users"}>All Users</Link></li>}
                    <li><Link to={"/dashboard/myPortfolio"}>My Portfolio</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;