'use client'
import React from "react";
import ProductInfo from "@/components/ProductInfo";
import { useAppContext } from "@/hooks/useAppContext";
import { Loader } from "@/components/Loader";
import { NotFound } from "@/components/NotFound";

export default function Page({ params }: any) {
  const {loading, products } = useAppContext();
  
  if (!params) return null;
  const id = params.slug;

  const product = products && products.find((product) => product.id == id);
  
  if (loading) return <Loader/>;

  if(!product) return <NotFound/>;

  return <ProductInfo product={product}/>;
};

