import React from 'react';

const ProductList = ({ products }) => {
    const productList = [];
    products.forEach((product, index) => {
        productList.push(
            <li key={index}>
                {product.name} - {product.inStock ? 'In Stock' : 'Out of Stock'}
            </li>
        );
    });

    return <ul>{productList}</ul>;
};

export default ProductList;