import React from 'react';

function ExampleComponent({ strProp, numProp, boolProp, arrProp, objProp }) {
    return (
        <div>
            <p>String Prop: {strProp}</p>
            <p>Number Prop: {numProp}</p>
            <p>Boolean Prop: {boolProp ? 'True' : 'False'}</p>
            <p>Array Prop: {arrProp.join(', ')}</p>
            <p>Object Prop: {objProp.key1}, {objProp.key2}</p>
        </div>
    );
}

const App = () => (
    <ExampleComponent
        strProp="Hello, World!"
        numProp={42}
        boolProp={true}
        arrProp={['Arr1', 'Arr2', 'Arr3']}
        objProp={{ key1: 'object 1', key2: 'object 2' }}
    />
);

export default App;