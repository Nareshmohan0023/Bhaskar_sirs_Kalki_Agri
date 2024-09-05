import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get('/api/auth/me', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            setUser(data.data);
        };

        fetchUser();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {user && (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
