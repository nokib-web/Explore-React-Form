import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setproducts]= useState([]);

    const handleAddProduct = (newProduct) => { 
        const updatedProducts = [...products, newProduct];
        setproducts(updatedProducts);
    }
        

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}  ></ProductForm>
            <ProductTable products={products}></ProductTable>
            
        </div>
    );
};

export default ProductManagement;