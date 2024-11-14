import React from 'react';
import Button from './Child';

const App = () => {
    // Define the function in the parent component
    const handleClick = () => {
        alert('Button clicked!');
    };

    const props = {
        onClick: handleClick,
    };

    return (
        <div>
            <Button {...props} />
        </div>
    );
};

export default App;
