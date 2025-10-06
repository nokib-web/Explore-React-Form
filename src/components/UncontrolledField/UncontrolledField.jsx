import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
     
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value);   
        console.log('submitted');
        console.log(passwordRef.current.value);

        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='email' placeholder='email' id='1' required /> <br />
               <input ref={passwordRef} type="password" name='password' placeholder='password' id='2' required /> <br />   
                <input type="submit" placeholder='submit' />

            </form>
            
        </div>
    );
};

export default UncontrolledField;