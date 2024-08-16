'use client'
import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';
import Image from 'next/image';
import { Loader } from './Loader';
import { WishListButton } from './WishListButton';
import { CartButton } from './CartButton';

const ProductList = () => {
  const { loading, products } = useAppContext();

  if (loading) return <Loader/>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products && products.map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col justify-between hover:bg-white hover:shadow-lg transition transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <Link href={`/product/${product.id}`}>
              <div className="flex justify-center p-2"> 
                <div className="relative w-full h-40 sm:h-48 md:h-56"> 
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="rounded-t-lg object-contain"
                  />
                </div>
              </div>
              <div className="pt-2 px-4">
                <h3 className="text-base md:text-lg font-semibold">
                  {product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500">${product.price}</p>
              </div>
            </Link>
            <div className="flex justify-between p-4">
              <CartButton id={product.id}/>
              <WishListButton id={product.id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default ProductList;
