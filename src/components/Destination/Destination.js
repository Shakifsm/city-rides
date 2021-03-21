import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';

const Destination = () => {
    const { bookName } = useParams();
    const selectedTransport = fakeData.find((tp) => tp.name === bookName);
    const { cost, image } = selectedTransport

    const [show, toggleShow] = useState(false);
    const [tripDetails, setTripDetails] = useState({
        From: "",
        To: "",
        Date: "",
        Time: "",
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setTripDetails({ ...tripDetails, [e.target.name]: value });
      };
    
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
            <Container>
                <Row className=" justify-content-center p-5">
                    <Col className="mt-3 m-lg-2 m-sm-2 m-md-3 p-5 p-lg-3 p-sm-2 p-md-3 col-lg-3 col-12 col-sm-8 col-md-4 bg-light">
                        {!show && (
                            <div>
                                <form action="">
                                    <label htmlFor="From">Pick From:</label>
                                    <input
                                        type="text"
                                        name="From"
                                        onChange={handleChange}
                                        placeholder="Your Location"
                                    />
                                    <br />
                                    <br />

                                    <label htmlFor="To">Pick To:</label>
                                    <input
                                        type="text"
                                        name="To"
                                        onChange={handleChange}
                                        placeholder="Destination"
                                    />
                                    <br />
                                    <br />
                                    <label htmlFor="From">Date</label>
                                    <br />
                                    <input type="date" name="Date" onChange={handleChange} />
                                    <br />
                                    <br />
                                    <label htmlFor="From">Time</label>
                                    <br />
                                    <input type="time" name="Time" onChange={handleChange} />
                                    <br />
                                    <br />
                                    <Link
                                        className="border border-info p-2 text-decoration-none bg-info text-light"
                                        onClick={() => toggleShow(!show)}
                                    >
                                        Search
                </Link>
                                </form>
                            </div>
                        )}
                        {show && (
                            <div>
                                <div>
                                    <b>From:</b> <h2>{tripDetails.From}</h2>
                                    <b> To:</b> <h2>{tripDetails.To}</h2>
                                    <b>Date:</b> <h2>{tripDetails.Date}</h2>
                                    <b> Time:</b> <h2 className="mb-4">{tripDetails.Time}</h2>
                                </div>
                                <div className="d-flex mb-3 ">
                                    <img className="pr-2" height="40px" src={image} alt="" />
                                    <p className="pr-3">
                                        <b>{bookName}</b>
                                    </p>
                                   
                                    <p className="pl-4">
                                        <b>${cost}</b>
                                    </p>
                                </div>
                                <div className="d-flex mb-3">
                                    <img className="pr-2" height="40px" src={image} alt="" />
                                    <p className="pr-3">
                                        <b>{bookName}</b>
                                    </p>
                                    
                                    <p className="pl-4">
                                        <b>${cost}</b>
                                    </p>
                                </div>
                                <div className="d-flex mb-3">
                                    <img className="pr-2" height="40px" src={image} alt="" />
                                    <p className="pr-3">
                                        <b>{bookName}</b>
                                    </p>
                                    
                                    <p className="pl-4">
                                        <b>${cost}</b>
                                    </p>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;