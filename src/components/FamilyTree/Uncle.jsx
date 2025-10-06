import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Hasina'></Cousin>
                <Cousin name='Hasiba'></Cousin>
                <Cousin name='Hasib'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;