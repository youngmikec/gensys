import React from 'react';
import ProductsLayout from '../../shared/products-layout';
import ProductSection from '../../shared/products-layout/product-section';

const ProductsComp = () => {
  return (
    <>
        <ProductsLayout>
            <div>Welcome to products page</div>
            <ProductSection />
            <br />
            <br />
            <ProductSection />
        </ProductsLayout>
    </>
  )
}

export default ProductsComp;