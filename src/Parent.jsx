import React from 'react';
import Child from './Child';

const ParentComponent = () => {
    const name = "Alice";
    const age = 25;

    return (
        <div>
            <h1>Parent Component</h1>
            {/* Passing props to ChildComponent */}
            <Child name={name} age={age} />
        </div>
    );
};

export default ParentComponent;