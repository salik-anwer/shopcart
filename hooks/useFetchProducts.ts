import { useQuery } from "@tanstack/react-query";

export type Product = {
    id: number;
    title:string;
    price:string;
    category:string;
    description:string;
    image:string;
}

const useFetchProducts = () => {
    const { data, error, isLoading } = useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
            throw new Error('Network response was not ok')
            }
            return response.json()
            }   
    });
    return {data, error, isLoading};
}

export { useFetchProducts };