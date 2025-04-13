import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
                <p className="text-lg text-gray-600">User ID: <span className="text-blue-500 font-medium">{userid}</span></p>
            </div>
        </div>
    );
};

export default User;