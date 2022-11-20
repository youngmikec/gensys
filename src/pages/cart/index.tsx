import React from 'react';
import CartComp from '../../components/cart-comp';

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';


const CartPage = () => {

    return (
        <>
            <Navbar bg='#000000' text='#ffffff' />

            <CartComp />

            <Footer />
        </>
    )
}

export default CartPage;