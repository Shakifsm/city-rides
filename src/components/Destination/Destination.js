import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
    return (
        <div>
            <header>
                <ul>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/destination"><li>Destination</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/login"><li className="login-li">Login</li></Link>
                </ul>
            </header>
            <h1>Destination</h1>
        </div>
    );
};

export default Destination;