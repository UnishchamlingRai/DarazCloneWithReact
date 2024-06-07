import CategoriesListName from "../../Home/CategoriesListName/CategoriesListName";
import styles from "./FilterSection.module.css";
function FilterSection() {
  return (
    <div className={styles.filterSection}>
      <h2>Filters</h2>
      <div className={styles.filterCategory}>
        <h3>Promotion & Services</h3>
        <ul>
          <li>Free Delivery</li>
          <li>Best Price Guaranteed</li>
          <li>Authentic Brands</li>
          <li>Daraz Verified</li>
          <li>Cash On Delivery</li>
        </ul>
      </div>
      <div className={styles.filterCategory}>
        <h3>Category</h3>
        <CategoriesListName from="FilterSection" />
      </div>
    </div>
  );
}

export default FilterSection;
