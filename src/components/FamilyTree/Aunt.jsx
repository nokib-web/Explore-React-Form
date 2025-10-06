import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Rahim'></Cousin>
                <Cousin name='Rahima'></Cousin>
                <Cousin name='Rahi'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;