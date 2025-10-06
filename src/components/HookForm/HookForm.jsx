import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name , nameOnChange] = useInputField('');
    const [email, emailOnChange]= useInputField('');
    const [password, passwordOnChange]= useInputField('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('submitted', name , email, password);
    }
    return (
        <div>

            <form onSubmit={handleSubmit} >
                <input type="text" defaultValue={name} onChange={nameOnChange} name='name' placeholder='Name' /> <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name='email' placeholder='Email' /> <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} name='password' placeholder='Password' /> <br />
                <input type="submit" placeholder='Submit' />

            </form>
            
        </div>
    );
};

export default HookForm;