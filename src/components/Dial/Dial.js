import React from "react";

const Dial = (props) => {
    return (
        <div style={{border: '2px solid blue', margin:'5px'}}>
            <h3>I have: {props.name}</h3>
            <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;