import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../json/data';

const Login = ({ setCurrentUser }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = validateUser(formData.emailOrUsername, formData.password);

        if (user) {
            setCurrentUser(user);
            if (user.isAdmin) {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } else {
            setError('Invalid email/username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back</h2>
                <p className="text-gray-600 text-center mb-8">Please sign in to continue</p>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
                        <p className="font-medium">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email or Username</label>
                        <input
                            type="text"
                            name="emailOrUsername"
                            value={formData.emailOrUsername}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.02]"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;