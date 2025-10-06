import React from 'react';

const handleformAction =(formData)=>{
    console.log(formData.get('name'));
    console.log(formData.get('email'))
}

const FormAction = () => {
    return (
        <div>
            <form action={handleformAction}>
                <input type="text" name='name' placeholder='Name' /> <br />
                <input type="email" name='email' placeholder='Email' /> <br />
                <input type="submit" placeholder='Submit' />
            </form>
            
        </div>
    );
};

export default FormAction;