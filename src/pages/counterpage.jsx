import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';

const CounterPage = () => {
    return (
        <div className='ui container' style={{marginTop: '20px' }}>
             <Link to="/">Back Home</Link><br></br>
            <Counter />
        </div>
    );
};

export default CounterPage;