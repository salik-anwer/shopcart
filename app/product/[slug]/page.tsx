import React from "react";
import ProductInfo from "@/components/ProductInfo";

export default function Page({ params }: any) {

  if (!params) return null;
  const id = params.slug;

  return <ProductInfo id={id}/>;
};

