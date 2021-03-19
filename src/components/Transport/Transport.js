import React from 'react';

const Transport = (props) => {
    const { image } = props.transport
    console.log(props);
    return (
        <div>
                <img style={{width:"70%"}} src={image} alt=""/>            
        </div>
    );
};

export default Transport;