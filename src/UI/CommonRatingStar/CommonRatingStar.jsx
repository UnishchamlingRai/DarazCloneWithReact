import React from "react";
import styles from "./CommonRatingStar.module.css";

export default function CommonRatingStar({ rating }) {
  return (
    <div className={styles.rating}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
}
