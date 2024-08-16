import { useAppContext } from "@/hooks/useAppContext";
import Image from "next/image";

export const WishListButton = ({id}:{id: number}) => {
    const {wishList, removeProductFromWishList, addProductToWishList} = useAppContext();

    const isWishListed = !!wishList?.some(item => item.id === id);

    if(isWishListed) {
      return (
        <button 
           onClick={() => removeProductFromWishList(id)} 
           className="p-2 click-transition"
        >
          <Image alt='wishlist' src={'/rheart.png'} height={25} width={25}/>
        </button>
      );
    }
    return (
      <button 
        onClick={() => addProductToWishList(id)} 
        className="p-2 click-transition"
      >
        <Image alt='wishlist' src={'/wheart.png'} height={25} width={25}/>
      </button>
    );
};