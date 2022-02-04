import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    return (
        <div>
            <ul>
                {["Alex", "John", "Jaz", "fedrik", "missali"].map((user, idx) => {
                    return <li key={idx}>{user}</li>;
                }
                )

                }
            </ul>
            <Link to="/">Back Home</Link>
        </div>
    );
};

export default UsersPage;