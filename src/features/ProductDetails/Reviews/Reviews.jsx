// src/Reviews.js
import React, { useState } from "react";
import styles from "./Reviews.module.css";
import Review from "./Review";

const Reviews = ({ reviews: reviewsData }) => {
  const [selectStar, setSelectStar] = useState(0);

  let filterByRating;
  if (selectStar > 0) {
    filterByRating = reviewsData.filter(
      (review) => review.rating === selectStar
    );
  } else {
    filterByRating = reviewsData; // No filtering needed if selectStar is 0
  }

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.filters}>
        <button className={styles.filterButton}>Filter By Rating</button>

        {[5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            className={`${styles.filterButton} ${
              star === selectStar ? styles.activeStar : ""
            }`}
            onClick={() => setSelectStar((s) => (s === star ? 0 : star))}
          >
            {star} ★
          </button>
        ))}
        <div className={styles.sortBy}>
          <span>Sort By:</span>
          <select>
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      {filterByRating.length <= 0 ? (
        <div className={styles.reviewsList}>
          <p>No Review For {selectStar} Star Rating</p>
        </div>
      ) : (
        <div className={styles.reviewsList}>
          {filterByRating.map((review, index) => (
            <Review review={review} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
