import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text too short!'; // An elegant way.

    if(props.textLength > 5){
        validationMessage = 'Text long enough!';
    }
    return (
        <div>
            {validationMessage}
            {
                props.textLength > 5 ?                
                <p>Text long enough!</p>:
                <p>Text too short!</p>
                }
        </div>
    )
};

export default validation