import React from 'react';

const ProductList = ({ products }) => {
    const productList = [];
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