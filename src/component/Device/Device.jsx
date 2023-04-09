import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>I have a device : {props.name}</h2>
            <h2>The price is : {props.price}</h2>
            <DeviceDetails ram={props.ram}></DeviceDetails>
        </div>
    );
};

export default Device;