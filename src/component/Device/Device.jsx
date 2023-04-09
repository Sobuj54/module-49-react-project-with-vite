import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h2>I have a device : {props.name}</h2>
            <h2>The price is : {props.price}</h2>
        </div>
    );
};

export default Device;