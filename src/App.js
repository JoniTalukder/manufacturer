import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import Review from './pages/Dashboard/Review';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import Payment from './pages/Dashboard/Payment';
import MyPortfolio from './pages/Dashboard/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase/:_id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
