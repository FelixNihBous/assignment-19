import React from 'react';
import ProductList from './ProductList';

const App = () => {
    const products = [
        { name: 'Real 1', price: 149.00 },
        { name: 'Fake 2', price: 151.00 },
        { name: 'Fake 3', price: 152.00 },
    ];

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} />
        </div>
    );
};

export default App;