import { useAppContext } from "@/hooks/useAppContext";
import Link from "next/link";

export const CartButton = ({id}:{id: number}) => {
    const {cart, addProductToCart} = useAppContext();
    const isInCart = !!cart?.some(item => item.id === id);
    if(isInCart) {
      return (
        <Link href={"/cart"}>
          <button  
            className="secondary-button click-transition"
          >
            Go to Cart
          </button>
        </Link>
      );
    }
    return (
      <button 
        onClick={() => addProductToCart(id)} 
        className="primary-button click-transition"
      >
        Add to Cart
      </button>
    )
  };