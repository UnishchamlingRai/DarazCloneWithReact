import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../Services/ProductsAPI";

export function useProduct(id) {
  const { isLoading, data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });

  return { isLoading, product };
}
