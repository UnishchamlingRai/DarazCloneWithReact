import React from "react";
import styles from "./ProductSearchSection.module.css";
import FilterSection from "../../features/ProductsSearch/FilterSection/FilterSection";
// import SortAndView from "../../features/ProductsSearch/SortAndView/SortAndView";
import ProductItem from "../../features/ProductsSearch/ProductItems/ProductItem";
// import { useSearchProudcts } from "../../features/ProductsSearch/useSearchProducts";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../features/Products/useProducts";
import Pagination from "../../UI/Pagination/Pagination";

const ProductSearchSection = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));

  const page = Number(searchParams.get("page"));
  const query = searchParams.get("query");
  console.log(searchParams.get("sortBy"));
  console.log(searchParams.get("order"));
  const sortBy = {
    sortBy: searchParams.get("sortBy"),
    order: searchParams.get("order"),
  };

  const { isLoading, products, totalPages } = useProducts(page, query, sortBy);
  console.log("SearchProducts:", products);
  if (isLoading) return <h1>Loading.....</h1>;
  if (products.products.length <= 0) {
    return <h1>No Product Found </h1>;
  }
  return (
    <div className={styles.productSearchSection}>
      <FilterSection />
      <div className={styles.productSection}>
        <div className={styles.searchResultsHeader}>
          <p>
            {products.products.length} items found for
            <strong> "{query}"</strong>
          </p>
          {/* <SortAndView /> */}
        </div>
        <div className={styles.productList}>
          {products.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
        <Pagination totalPages={totalPages} query={query} />
      </div>
    </div>
  );
};

export default ProductSearchSection;
