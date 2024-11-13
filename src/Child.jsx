import React from 'react';

const ChildComponent = ({ name, age }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default ChildComponent;