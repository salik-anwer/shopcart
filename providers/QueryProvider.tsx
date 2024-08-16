'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ContextProvider } from './ContextProvider';

const queryClient = new QueryClient();

export const QueryProvider = ({children}: {children: React.ReactNode}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <ContextProvider>
                {children}
            </ContextProvider>
        </QueryClientProvider>
    );
};

