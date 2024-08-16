'use client'
import { usePathname } from 'next/navigation'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const isCart = pathname.includes('/cart');
  const isWishList = pathname.includes('/wishlist');
  
  return (
    <nav className="bg-custom-gradient px-4 py-2 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image src={"/shopcart.png"} alt='logo' height={60} width={60}/>
        </Link>
        <div className="flex gap-6 justify-center items-center p-2">
          {!isWishList && <Link href="/wishlist" className="text-black text-xl">
            <div className="flex gap-2 items-center justify-center">
              <Image src={'/heart.png'} alt='wishlist' height={25} width={25}/>
              <span>Wishlist</span>
            </div>
          </Link>}
          {!isCart && <Link href="/cart" className="text-black text-xl">
            <div className="flex gap-2 items-center justify-center">
              <Image src={'/trolley.png'} alt='cart' height={25} width={25} className="mb-1"/>
              <span>Cart</span>
            </div>
          </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
