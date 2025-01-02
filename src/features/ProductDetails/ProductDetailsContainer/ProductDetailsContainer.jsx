import React from "react";

import { useParams } from "react-router";
import { useProduct } from "../userProduct";

import styles from "./ProductDetailsContainer.module.css";
import RightSideDetails from "../RightSideDetails/RightSideDetails";
import LeftSideImages from "../LeftSideImages/LeftSideImages";
import RatingSummary from "../RatingSummary/RatingSummary";
import Reviews from "../Reviews/Reviews";
import LoadingSpinner from "../../../UI/LoadingSpinner/LoadingSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);

  // useEffect(() => {
  //   document.title = `${product?.title} | Daraz`;
  // }, [product.title]);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <LeftSideImages product={product} key={product.id} />
        <RightSideDetails product={product} />
      </div>
      <div className={styles.reviewsAndRatings}>
        <p>Reviews & Ratings</p>
        <RatingSummary reviews={product.reviews} rating={product.rating} />
        <Reviews reviews={product.reviews} />
      </div>
    </div>
  );
};

export default ProductDetails;
