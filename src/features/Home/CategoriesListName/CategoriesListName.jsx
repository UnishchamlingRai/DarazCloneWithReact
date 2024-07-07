// src/components/Categories/Categories.js
import React from "react";
import styles from "./CategoriesListName.module.css";

import { useProductCategories } from "./useProductCategories";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

// const categories = [
//   { name: "Women's Fashion", icon: "👗" },
//   { name: "Health & Beauty", icon: "💄" },
//   { name: "Men's Fashion", icon: "👔" },
//   { name: "Watches & Accessories", icon: "⌚" },
//   { name: "Electronic Devices", icon: "📱" },
//   { name: "TV & Home Appliances", icon: "📺" },
//   { name: "Electronic Accessories", icon: "🔌" },
//   { name: "Groceries & Pets", icon: "🛒" },
//   { name: "Babies & Toys", icon: "🍼" },
//   { name: "Home & Lifestyle", icon: "🏠" },
//   { name: "Sports & Outdoor", icon: "⚽" },
//   { name: "Motors, Tools & DIY", icon: "🛠️" },
// ];

const CategoriesListName = ({ from }) => {
  const { categories, isLoading } = useProductCategories();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className={from ? "" : styles.categories}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryItem}>
          {/* <span className={styles.icon}>{category.icon}</span> */}
          <span className={styles.name}>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesListName;
