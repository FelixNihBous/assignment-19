import React from 'react';

const ExampleComponent = ({ strProp, numProp, boolProp, arrProp, objProp }) => {
    return (
        <div>
            <p>String Prop: {strProp}</p>
            <p>Number Prop: {numProp}</p>
            <p>Boolean Prop: {boolProp ? 'True' : 'False'}</p>
            <p>Array Prop: {arrProp.join(', ')}</p>
            <p>Object Prop: {objProp.key1}, {objProp.key2}</p>
        </div>
    );
};

export default ExampleComponent;