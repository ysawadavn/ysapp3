import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>YSapp</h1>
            <big>This is the Main Page<br></br></big>
            <Link to="/users"><big>Show List of Users<br></br></big></Link>
            <Link to="/about"><big>About</big></Link>
        </div>
    );
};

export default MainPage;