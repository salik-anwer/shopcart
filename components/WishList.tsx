'use client'
import React from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { EmptyWishList } from '@/components/EmptyWishList';
import { WishListCard } from './WishListCard';

const WishList = () => {
  const { wishList, products } = useAppContext();

  if (!wishList?.length) {
    return (
      <EmptyWishList/>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {wishList.map((wishItem) => {
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
