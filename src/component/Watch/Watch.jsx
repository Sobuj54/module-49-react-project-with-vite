import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => setSteps(steps + 1);
    
    return (
        <div style={{border:'2px solid aqua', margin:'10px'}}>
            <h2>This is watch component.</h2>
            <h4>Steps : {steps}</h4>
            <button onClick={increaseSteps}>Increase Steps</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;