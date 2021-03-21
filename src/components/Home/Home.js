import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Transport from '../Transport/Transport';
import "./Home.css";

const Home = () => {
    
    const[transports, setTransports] = useState([]);
    useEffect(() =>{
        setTransports(fakeData)
    },[])
    

    return (
        <div className="parent">
            <header>
                <ul>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/destination"><li>Destination</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/login"><li className="login-li">Login</li></Link>
                </ul>
            </header>
            <main className="home-main">
                <div className="container">
                    <div className="row">
                    {
                        transports.map(transport =>
                            <div className="col-md-3">
                                <div className="div-1">
                                    <Transport transport={transport}></Transport>
                                </div>
                            </div>)
                    }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;