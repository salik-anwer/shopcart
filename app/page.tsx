'use client'
import React from 'react';
import ProductList from "@/components/ProductList";
import { useAppContext } from '@/hooks/useAppContext';
import { Loader } from '@/components/Loader';

export default function Home() {
  const {loading} = useAppContext();

  if (loading) return <Loader/>;

  return <ProductList/>;
};


