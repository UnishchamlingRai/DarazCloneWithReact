import { useState } from "react";
import styles from "./LeftSideImages.module.css";
function LeftSideImages({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className={styles.imageContainer}>
      <div className={styles.thumbnail}>
        <img src={selectedImage} alt={product.thumbnail} />
      </div>
      <div className={styles.images}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={
              selectedImage === image ? styles.selectedImage : styles.image
            }
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftSideImages;
