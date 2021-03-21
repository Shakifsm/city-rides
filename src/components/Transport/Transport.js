import React from 'react';
import { Link } from 'react-router-dom';

const Transport = (props) => {
    const { image, name } = props.transport
    console.log(props);
    return (
        <div>
                <Link to={`/book/${name}`}>
                    <img style={{width:"70%"}} src={image} alt=""/>
                    <div style={{textAlign:"center"}}>
                        <p>{name}</p>
                    </div>   
                </Link>  
        </div>
    );
};

export default Transport;