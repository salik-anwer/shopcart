import { useContext } from "react";
import { AppContext, AppContextProps } from "@/context/AppContext";

const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useContext must be used within a ContextProvider');
    }
    return context;
  };

export {useAppContext};