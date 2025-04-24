import React from 'react';
import { useLoaderData } from 'react-router-dom';

// Loader function
export async function userLoader() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return response.json();
}

// Component
const Userpage = () => {
    const user = useLoaderData();

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default Userpage;