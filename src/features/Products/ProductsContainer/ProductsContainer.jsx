// import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../useProducts";

import style from "./ProductsContainer.module.css";
import Pagination from "../../../UI/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

function ProductsContainer() {
  // const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const { isLoading, products, totalPages } = useProducts(page);


  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={style.productsContainer}>
      <div className={style.products}>
        {products?.products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default ProductsContainer;
