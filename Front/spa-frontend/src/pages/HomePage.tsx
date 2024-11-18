import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to SPA</h1>
            <nav>
                <Link to="/create">Create Entity</Link>
                <Link to="/list">List Entities</Link>
            </nav>
        </div>
    );
};

export default HomePage;
