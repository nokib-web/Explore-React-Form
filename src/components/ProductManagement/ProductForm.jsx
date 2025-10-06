import React, {  useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error,setError]=useState('')
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;




        if(name.length===0 || price.length===0 || quantity.length===0){
            setError('All fields are required')
            return;
        }
        else if (price<0){
            setError('price can not be negative')
        }
        else if (quantity<0){
            setError('quantity can not be negative')
        }
        else{
            setError('')
        }


        const newProduct = { name, price, quantity };
        // console.log('Product added:', newProduct);
        handleAddProduct(newProduct);

        // console.log(event.target.name.value);
        // console.log(event.target.price.value);
        // console.log(event.target.quantity.value);
        // Logic to handle form submission will go here
    }   
    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleSubmit} >
                <input type="text"  name='name' placeholder='Product Name' /> <br />
                <input type="number" name='price' placeholder='Product Price' /> <br />
                <input type="text" name='quantity' placeholder='Product Quantity' /> <br />
                <input type="submit" placeholder='Add Product' />
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            
        </div>
    );
};

export default ProductForm;