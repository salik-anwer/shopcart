'use client'
import React from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { WishListCard } from './WishListCard';
import { WishListItem } from '@/context/AppContext';

const WishList = ({wishListItems}:{wishListItems: WishListItem[]}) => {
  const { products } = useAppContext();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {wishListItems.map((wishItem) => {
          const product = products?.find(p => p.id === wishItem.id);
          if(!product) return null;
            return (
              <WishListCard key={product.id} product={product}/>
            );
          })
        }
      </div>
    </div>
  ); 
};

export default WishList;
