import React from 'react';

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ProductDetailComp from '../../components/product-detail';


const ProductsDetail = () => {

    return (
        <>
            <Navbar bg='#000000' text='#ffffff' />
            <ProductDetailComp />
            <Footer />
        </>
    )
}

export default ProductsDetail;