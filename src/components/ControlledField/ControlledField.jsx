import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('secret');
    const [error , setError] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);

    
        if(
            password.length<6
        ){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
        }


        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
    }

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        }

        const handlePasswordChange = (event) => {
            // setPassword(event.target.defaultValue);
            console.log(event.target.value);
            setPassword(event.target.value);
            // if(password.length < 6){
            //     setError('Password must be 6 characters or longer')
            // }
            // else{
            //     setError('');
            // }
        }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmailChange} defaultValue={email} placeholder='email' id='1' required /> <br />
               <input type="password" onChange={handlePasswordChange} defaultValue={password} placeholder='password' id='2' required /> <br />   
                <input type="submit" placeholder='submit' />
            </form>
            <p style={{color: 'red'}}>
                <small>
                    {error}
                </small>
            </p>
            
        </div>
    );
};

export default ControlledField;