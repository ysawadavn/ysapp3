import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    return (
        <div>
            <ul>
                {["User001243", "User001255", "User001476", "Test1", "Test2"].map((user, idx) => {
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