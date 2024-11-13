import React from 'react';
import ExampleComponent from './Example';

const App = () => {
    const props = {
        strProp: "Hello, World!",
        numProp: 42,
        boolProp: true,
        arrProp: ['Apple', 'Banana', 'Cherry'],
        objProp: { key1: 'Value1', key2: 'Value2' }
    };

    return (
        <div>
            {/* Using the spread operator to pass all props */}
            <ExampleComponent {...props} />
        </div>
    );
};

export default App;