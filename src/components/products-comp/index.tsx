import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';

import ProductsLayout from '../../shared/products-layout';
import { ApiResponse, Category, Product } from '../../model';
import ProductSection from '../../shared/products-layout/product-section';
import { RETRIEVE_CATEGORIES_PUBLIC, RETRIEVE_PUBLIC_PRODUCTS } from '../../services';

const ProductsComp = () => {
  const [loading, setLoading]= useState<boolean>(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const retreiveProducts = () => {
    setLoading(true);
    const query: string = ``;
    RETRIEVE_PUBLIC_PRODUCTS(query)
    .then((res: AxiosResponse<ApiResponse>) => {
      const { message, success, payload } = res.data;
      if(success){
        setLoading(false);
        setAllProducts(payload);
      }
    }).catch(err => {
      const { message } = err.data;
      setLoading(false);
      console.log(message);
    })
  }

  const retrieveCategories = () => {
    RETRIEVE_CATEGORIES_PUBLIC()
    .then((res: AxiosResponse<ApiResponse>) => {
        const { message, payload } = res.data;
        setCategories(payload);
        console.log(message);
    })
    .catch((err: any) => {
        const { message } = err.response.data;
    });
  };

  useEffect(() => {
    retreiveProducts();
    retrieveCategories();
  }, []);

  return (
    <>
        <ProductsLayout categories={categories}>
          <ProductSection title='Trending Products' products={allProducts} />
          <br />
          <br />
          <ProductSection title='Top Rated Products' products={allProducts} />
        </ProductsLayout>
    </>
  )
}

export default ProductsComp;