import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid salmon', margin:'10px'}}>
            <h3>This is knob component.</h3>
            <h5>Count steps : {props.steps}</h5>
        </div>
    );
};

export default Knob;