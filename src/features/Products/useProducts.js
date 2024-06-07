import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../Services/ProductsAPI";

export function useProducts(page = 1, query, sortBy) {
  const queryClient = useQueryClient();

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", page, query, sortBy],
    queryFn: () => getProducts(page, query, sortBy),
    keepPreviousData: true,
  });

  const totalPages = products ? Math.ceil(products.total / 10) : 0; // Assuming 10 products per page

  //for prefetching
  if (page < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1, query],
      queryFn: () => getProducts(page + 1, query),
    });
  }

  return { isLoading, products, totalPages };
}
