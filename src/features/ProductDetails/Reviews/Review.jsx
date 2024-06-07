import CommonRatingStar from "../../../UI/CommonRatingStar/CommonRatingStar";
import styles from "./Reviews.module.css";
function daysAgo(dateString) {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  const diffTime = Math.abs(currentDate - givenDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

//   const daysAgoResult = daysAgo('2024-05-23T08:56:21.618Z');
//   console.log(`${daysAgoResult} days ago`);
function Review({ review }) {
  return (
    <div key={review.id} className={styles.review}>
      <div className={styles.reviewHeader}>
        <CommonRatingStar rating={review.rating} />
        <span className={styles.author}>{review.reviewerName}</span>
      </div>
      <p className={styles.comment}>{review.comment}</p>
      <div className={styles.footer}>
        <span className={styles.date}>{daysAgo(review.date)} day ago</span>
        <div className={styles.actions}>
          <button className={styles.actionButton}>👍 {review.helpful}</button>
          <button className={styles.actionButton}>
            👎 {review.notHelpful}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
