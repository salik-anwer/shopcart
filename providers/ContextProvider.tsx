'use client'
import { AppContextProvider } from '@/context/AppContext';
import { useFetchProducts } from '@/hooks/useFetchProducts';


export const ContextProvider = ({children}: {children: React.ReactNode}) => {
    const {data, error, isLoading} = useFetchProducts();

    return (
        <AppContextProvider initialProducts={data} error={error} loading={isLoading}>
            {children}
        </AppContextProvider>
    );
};