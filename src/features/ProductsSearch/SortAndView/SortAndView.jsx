// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SortAndView.module.css";
function SortAndView() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const query = searchParams.get("query");
  function handelOnClick(e) {
    // console.log(e.target.value);
    setSearchParams({ sortBy: "price", order: e.target.value });
    if (page) {
      setSearchParams({ page, query, sortBy: "price", order: e.target.value });
    }
  }
  return (
    <div className={styles.sortAndView}>
      <select onClick={handelOnClick}>
        {/* <option>Best Match</option> */}
        <option value={"asc"}>Price: Low to High</option>
        <option value={"desc"}>Price: High to Low</option>
      </select>
      {/* <div className={styles.viewToggle}>
        <button>🔳</button>
        <button>🔲</button>
      </div> */}
    </div>
  );
}

export default SortAndView;
