import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Not Found!</h1><br></br>
            <Link to="/">Back Home</Link><br></br>
        </div>
    );
};

export default NotFoundPage;