import React from 'react';

const ProductList = ({ products }) => {
    // Create a new array to hold the rendered elements
    const productList = [];
    // Use forEach to loop and render each item
    products.forEach((product, index) => {
        productList.push(
            <li key={index}>
                {product.name} - ${product.price.toFixed(2)}
            </li>
        );
    });

    return <ul>{productList}</ul>;
};

export default ProductList;