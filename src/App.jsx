import React from 'react';
import ProductList from './ProductList';

const App = () => {
    // Sample product array
    const products = [
        { name: 'Product 1', inStock: true },
        { name: 'Product 2', inStock: false },
        { name: 'Product 3', inStock: true },
    ];

    return (
        <div>
            <h1>Product List</h1>
            <ProductList products={products} />
        </div>
    );
};

export default App;