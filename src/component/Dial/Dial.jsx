import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border :'2px solid red', margin: '5px' }}>
            <h3>This is dial component.</h3>
            <h5>Your steps count : {props.steps} </h5>
        </div>
    );
};

export default Dial;