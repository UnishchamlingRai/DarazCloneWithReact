// import { useState } from "react";
import style from "./Pagination.module.css";
import { useSearchParams } from "react-router-dom";

function Pagination({ totalPages, query }) {
  console.log(query);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  function handelPrevious() {
    setSearchParams({ page: page > 1 ? page - 1 : page });
    if (query) {
      setSearchParams({ page: page > 1 ? page - 1 : page, query: query });
    }
  }
  function handelNext() {
    setSearchParams({
      page: page < totalPages ? page + 1 : page,
    });
    if (query) {
      setSearchParams({
        page: page < totalPages ? page + 1 : page,
        query: query,
      });
    }
  }
  return (
    <div className={style.pagination}>
      <button onClick={handelPrevious} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page}/{totalPages}
      </span>
      <button onClick={handelNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
