'use client'
import React from 'react';
import Cart from '@/components/Cart';
import { useAppContext } from '@/hooks/useAppContext';
import { EmptyCart } from '@/components/EmptyCart';

export default function Page() {
  const {cart} = useAppContext();

  if(!cart?.length) {
    return (
      <EmptyCart/>
    );
  }

  return <Cart cartItems={cart}/>;
}