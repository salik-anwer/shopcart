'use client'
import { EmptyWishList } from '@/components/EmptyWishList';
import WishList from '@/components/WishList';
import { useAppContext } from '@/hooks/useAppContext';
import React from 'react';

export default function Page() {
  const {wishList} = useAppContext();
  
  if (!wishList?.length) {
    return (
      <EmptyWishList/>
    );
  }

  return <WishList wishListItems={wishList}/>;
}
