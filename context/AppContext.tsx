import { createContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/hooks/useFetchProducts';

export interface WishListItem {
  id: number;
}

export interface CartItem extends WishListItem{
  quantity: number;
}

interface AppContextProps {
    products: Product[] | undefined;
    cart: CartItem[] | undefined;
    wishList: WishListItem[] | undefined;
    addProductToCart: (id: number) => void;
    removeProductFromCart: (id: number, removeCompletely?: boolean) => void;
    clearCart: () => void;
    calculateTotalPrice: () => number;
    addProductToWishList: (id: number) => void;
    removeProductFromWishList: (id: number) => void;
    error: Error | null;
    loading: boolean;
  }

interface AppContextProviderProps {
    children: ReactNode;
    initialProducts?: Product[];
    error: Error | null;
    loading: boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children, initialProducts, error, loading}) => {

  const [products, setProducts] = useState<Product[]>(initialProducts || []);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishList, setWishList] = useState<WishListItem[]>([]);

  useEffect(( )=> {
    if(initialProducts)
      setProducts(initialProducts);
  }, [initialProducts]);

  const addProductToCart = (id: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === id);
      if (existingProduct) {
        // increase quantity
        return prevCart.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // add product
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };

  const removeProductFromCart = (id: number, removeCompletely: boolean = false) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === id);
      
      if (!existingProduct) return prevCart;
  
      if (removeCompletely || existingProduct.quantity === 1) {
        // remove product entirely
        return prevCart.filter(item => item.id !== id);
      } else {
        // decrease quantity
        return prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = products?.find(prod => prod.id === item.id);
      return total + (product?.price && parseFloat(product.price)|| 0) * item.quantity;
    }, 0);
  };

  const addProductToWishList = (id: number) => {
    setWishList((prevWishList) => {
      if (!prevWishList.some(item => item.id === id)) {
        return [...prevWishList, { id }];
      }
      return prevWishList;
    });
  };

  const removeProductFromWishList = (id: number) => {
    setWishList((prevWishList) => prevWishList.filter(item => item.id !== id));
  };
  
  return (
    <AppContext.Provider 
        value={{
            products,
            cart,
            wishList,
            addProductToCart,
            removeProductFromCart,
            clearCart,
            calculateTotalPrice,
            addProductToWishList,
            removeProductFromWishList,
            error,
            loading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
export type {AppContextProps};
