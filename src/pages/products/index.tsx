import React from 'react';

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ProductsComp from '../../components/products-comp';
// import WhatsappButton from '../../components/whatsapp-btn';


const ProductsPage = () => {

    return (
        <>
            <Navbar bg='#000000' text='#ffffff' />

            <ProductsComp />

            {/* whatsapp */}
            {/* <WhatsappButton /> */}
            <Footer />
        </>
    )
}

export default ProductsPage;