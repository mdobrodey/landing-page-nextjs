import React from 'react';
import Image from 'next/image';
import styles from './ProductItem.module.css';

const productItem = ({ title, description, image, price, ml }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <div className={styles.benefitCircle}></div>
        <Image src={`${image}`} height={241} width={190} alt="cup" />
      </div>
      <div className={styles.productText}>
        <h1 className={styles.productTitle}>{title}</h1>
        <p className={styles.productDesc}>{description}</p>
      </div>
      <div className={styles.productPrice}>
        <div className={styles.priceWrapper}>
          <p className={styles.priceValue}>{price}</p>
          <p className={styles.productMl}>{ml}</p>
        </div>
      </div>
      <div className={styles.productButton}>Buy Product</div>
    </div>
  );
};

export default productItem;
