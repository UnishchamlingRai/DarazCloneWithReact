import React from "react";

import { useParams } from "react-router";
import { useProduct } from "../userProduct";

import styles from "./ProductDetailsContainer.module.css";
import RightSideDetails from "../RightSideDetails/RightSideDetails";
import LeftSideImages from "../LeftSideImages/LeftSideImages";
import RatingSummary from "../RatingSummary/RatingSummary";
import Reviews from "../Reviews/Reviews";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);
  console.log(product);

  if (isLoading) return <h1>Loading....</h1>;
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
