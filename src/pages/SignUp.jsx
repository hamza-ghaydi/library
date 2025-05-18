import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUsers, findUserByEmail } from '../json/data';

const SignUp = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        phone: "",
        verificationCode: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleStep1Submit = (e) => {
        e.preventDefault();
        if (findUserByEmail(formData.email)) {
            setError("Email already exists");
            return;
        }
        generateVerificationCode();
        setStep(2);
    };

    const generateVerificationCode = () => {
        const code = Math.floor(10000 + Math.random() * 90000).toString();
        setVerificationCode(code);

        if (Notification.permission === "granted") {
            new Notification(`Your verification code is: ${code}`);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(`Your verification code is: ${code}`);
                }
            });
        }
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (formData.verificationCode === verificationCode) {
            setStep(3);
            setError("");
        } else {
            setError("Invalid verification code");
        }
    };

    const handleStep3Submit = (e) => {
        e.preventDefault();
        addUsers({
            email: formData.email,
            username: formData.username,
            phone: formData.phone,
            password: formData.password,
            isAdmin: false,
        });
        navigate('/login');
    };

    const renderStepIndicator = () => (
        <div className="flex justify-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= stepNumber ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                        {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                        <div className={`w-16 h-1 ${
                            step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                        }`} />
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Create Account</h2>
                <p className="text-gray-600 text-center mb-8">Join our community today</p>

                {renderStepIndicator()}

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
                        <p className="font-medium">{error}</p>
                    </div>
                )}

                {step === 1 && (
                    <form onSubmit={handleStep1Submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.02]"
                        >
                            Continue
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleStep2Submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                            <input
                                type="text"
                                name="verificationCode"
                                value={formData.verificationCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                required
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                We've sent a verification code to your desktop notifications
                            </p>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-[1.02]"
                        >
                            Verify Code
                        </button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleStep3Submit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
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
                            Create Account
                        </button>
                    </form>
                )}

                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{' '}
                    <button 
                        onClick={() => navigate('/login')}
                        className="text-primary font-medium hover:underline"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;