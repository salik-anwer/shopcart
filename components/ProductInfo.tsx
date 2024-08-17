'use client'
import Image from 'next/image';
import React from 'react';
import { CartButton } from './CartButton';
import { WishListButton } from './WishListButton';
import { Product } from '@/hooks/useFetchProducts';

const ProductInfo = ({ product }: {product: Product}) => {

  return (
    <div className="container mt-10 mx-auto max-w-[50rem] p-4 flex flex-col gap-4 items-center md:flex-row md:items-start md:gap-8">
      <div className="flex flex-col items-center gap-5 w-85 md:w-1/2 mb-5 border-2 border-gray p-4">
        <div className="relative h-80 w-80">
          <Image src={product.image} alt={product.title} fill className="object-contain" />
        </div>
        <div className="w-80 flex justify-between">
          <CartButton id={product.id}/>
          <WishListButton id={product.id}/>
        </div>
      </div>
      <div className="w-80 md:w-1/2 flex flex-col gap-3 pb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">{product.title}</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 text-center md:text-left">${product.price}</p>
        <p className="text-sm md:text-base text-gray-600 text-center md:text-left">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;

