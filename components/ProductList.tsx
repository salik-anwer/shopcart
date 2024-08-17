'use client'
import React from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { MainCard } from './MainCard';

const ProductList = () => {
  const { products } = useAppContext();

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
