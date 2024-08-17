import { Product } from "@/hooks/useFetchProducts";
import Image from "next/image";
import Link from "next/link";
import { CartButton } from "./CartButton";
import { useAppContext } from "@/hooks/useAppContext";

export const WishListCard = ({product}: {product: Product}) => {
    const {removeProductFromWishList} = useAppContext();

    return (
        <div className="flex flex-col justify-between hover:shadow-lg hover:bg-white">
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
                  <h3 className="text-base md:text-lg font-semibold">{product.title.length > 15? `${product.title.substring(0,15)}...`: product.title}</h3>
                  <p className="text-sm md:text-base text-gray-500">${product.price}</p>
                </div>
              </Link>
              <div className="flex justify-between p-4 items-center">
                <CartButton id={product.id}/>
                <button 
                  onClick={() => removeProductFromWishList(product.id)} 
                  className="round-button click-transition"
                >
                  <Image src="/close.png" alt='close' height={12} width={12}/>
                </button>
              </div>
         </div>
        );
      };