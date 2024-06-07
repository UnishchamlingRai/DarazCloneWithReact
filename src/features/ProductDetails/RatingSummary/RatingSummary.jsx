// src/RatingSummary.js
import React from "react";
import styles from "./RatingSummary.module.css";

const RatingSummary = ({ rating, reviews }) => {
  // const rating = 4.5;
  // const totalRatings = 241;
  const totalRatings = reviews.length;
  const breakdown = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  reviews.forEach((review) => {
    const index = breakdown.findIndex((item) => item.stars === review.rating);
    if (index !== -1) {
      breakdown[index].count += 1;
    }
  });

  return (
    <div className={styles.ratingSummary}>
      <div className={styles.overallRating}>
        <div className={styles.ratingValue}>
          <span className={styles.ratingNumber}>{rating}</span>
          <span className={styles.topRated}>⭐ Top Rated</span>
        </div>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`${styles.star} ${
                rating >= i + 0.5 ? styles.filled : ""
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <div className={styles.totalRatings}>{totalRatings} ratings</div>
      </div>

      <div className={styles.breakdown}>
        {breakdown.map((item, index) => (
          <div key={index} className={styles.breakdownItem}>
            <span className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`${styles.star} ${
                    item.stars > i ? styles.filled : ""
                  }`}
                >
                  ★
                </span>
              ))}
            </span>
            <div className={styles.progressBar}>
              <div
                className={styles.filledBar}
                style={{ width: `${(item.count / totalRatings) * 100}%` }}
              ></div>
            </div>
            <span className={styles.count}>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
