import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/login');
    };

    return (
        <div className='flex items-center justify-between p-5 bg-amber-300 shadow-md'>
            {/* logo */}
            <Link to="/" className="flex items-center gap-2">
                <img src="/assets/logo.png" alt="logo" className='w-10 h-10' />
                <h1 className="text-2xl font-bold text-gray-800">Library</h1>
            </Link>
            
            <div className='flex items-center gap-5'>
                {currentUser ? (
                    <>
                        <span className="text-gray-700 font-medium">Welcome, {currentUser.username}</span>
                        <button 
                            onClick={handleLogout}
                            className='cursor-pointer bg-[#EF7B04] text-amber-50 text-md font-bold px-5 py-2 rounded-md hover:bg-amber-50 hover:text-[#EF7B04] transition-colors'
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link 
                            to="/signup" 
                            className='cursor-pointer bg-[#EF7B04] text-amber-50 text-md font-bold px-5 py-2 rounded-md hover:bg-amber-50 hover:text-[#EF7B04] transition-colors'
                        >
                            Sign Up
                        </Link>
                        <Link 
                            to="/login" 
                            className='cursor-pointer bg-[#EF7B04] text-amber-50 text-md font-bold px-5 py-2 rounded-md hover:bg-amber-50 hover:text-[#EF7B04] transition-colors'
                        >
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;