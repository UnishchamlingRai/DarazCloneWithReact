import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../Services/ProductsAPI";

export function useProductCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories, isLoading };
}
