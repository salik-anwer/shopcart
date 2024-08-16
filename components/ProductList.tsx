'use client'
import React from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { Loader } from './Loader';;
import { MainCard } from './MainCard';

const ProductList = () => {
  const { loading, products } = useAppContext();

  if (loading) return <Loader/>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products && products.map((product) => (
          <MainCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );  
};

export default ProductList;
