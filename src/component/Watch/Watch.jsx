import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => setSteps(steps + 1);
    
    return (
        <div>
            <h4>Steps : {steps}</h4>
            <button onClick={increaseSteps}>Increase Steps</button>
        </div>
    );
};

export default Watch;