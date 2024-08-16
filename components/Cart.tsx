'use client'
import { EmptyCart } from '@/components/EmptyCart';
import { useAppContext } from '@/hooks/useAppContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Confetti from 'react-confetti'

const Cart = () => {
  const { calculateTotalPrice, cart, products, removeProductFromCart, addProductToCart, clearCart } = useAppContext();
  const [explosionVisible, setExplosionVisible] = useState<boolean>(false);

  if(!cart?.length) {
    return (
      <EmptyCart/>
    );
  }

  const handleCheckOut = () => {
    setExplosionVisible(true);
    setTimeout(() => {
      setExplosionVisible(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      {explosionVisible && <Confetti width={window.innerWidth-100} height={window.innerHeight-150} numberOfPieces={333}/>}
      <div className="w-full lg:w-2/3 mb-6">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
          <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-full"> 
              {cart.map((item) => {
                const product = products?.find(p => p.id === item.id);
                if (!product) return null;
                return (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center p-4 hover:bg-white hover:shadow-lg w-full"
                  >
                    <Link href={`/product/${product.id}`}>
                      <div className="mx-2 relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <Image
                          src={product.image} 
                          alt={product.title} 
                          fill 
                          className="rounded-t-lg object-contain"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 lg:ml-4">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg md:text-xl">{product.title}</h3>
                      </Link>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button 
                            className="round-button click-transition" 
                            onClick={() => removeProductFromCart(item.id)}
                          >
                            <Image src="/minus.png" alt='minus' height={12} width={12}/>
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            className="round-button click-transition" 
                            onClick={() => addProductToCart(item.id)}
                          >
                            <Image src="/plus.png" alt='plus' height={12} width={12}/>
                          </button>
                        </div>
                        <button 
                          onClick={() => removeProductFromCart(product.id, true)} 
                          className="round-button click-transition"
                        >
                          <Image src="/close.png" alt='close' height={12} width={12}/>
                        </button>
                      </div>
                      <p className="text-sm md:text-base text-gray-500 mt-2">${product?.price && (parseFloat(product?.price) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
      <div className="mb-8 mx-4 lg:w-1/3 lg:sticky lg:top-24 lg:h-full lg:self-start lg:mt-16">
          <div className="bg-white shadow-lg p-4 rounded">
                <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
                <p className="text-base mb-2">Subtotal: ${calculateTotalPrice().toFixed(2)}</p>
                <p className="text-lg font-semibold mb-4">Total: ${calculateTotalPrice().toFixed(2)}</p>
                <div className="flex justify-between">
                <button className="primary-button click-transition" onClick={() => handleCheckOut()}>Checkout</button>
                <button className="secondary-button click-transition" onClick={() => clearCart()}>
                    Clear Cart
                </button>
                </div>
          </div>
      </div>
    </div>
  );
  
};

export default Cart;
