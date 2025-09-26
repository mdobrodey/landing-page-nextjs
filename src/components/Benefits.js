import Image from 'next/image';
import CircularText from './CircularText';
import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.benefitsBlock}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitImageWrapper}>
              <Image
                src="/icons/3d/heart.png"
                width={140}
                height={178}
                alt="Heart icon"
                style={{ marginLeft: '5px', marginTop: '10px' }}
                className={styles.benefitIcon}
              />
            </div>
            <div className={styles.benefitCircle}></div>
            <h3 className={styles.benefitTitle}>Tasty</h3>
            <p className={styles.benefitDesc}>
              We have the most delicious coffee
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.circular}>
              <CircularText
                text="*WE*HAVE*WE*HAVE"
                onHover="speedUp"
                spinDuration={9}
              />
            </div>
            <div className={styles.benefitImageWrapper}>
              <Image
                src="/icons/3d/rocket.png"
                width={188}
                height={182}
                alt="Rocket icon"
                className={styles.benefitIcon}
              />
            </div>
            <div className={styles.benefitCircle}></div>
            <h3 className={styles.benefitTitle}>Fast</h3>
            <p className={styles.benefitDesc}>
              Our cafe will serve you quickly
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitImageWrapper}>
              <Image
                src="/icons/3d/money.png"
                width={204}
                height={144}
                alt="Money icon"
                className={styles.benefitIcon}
              />
            </div>
            <div className={styles.benefitCircle}></div>
            <h3 className={styles.benefitTitle}>Available</h3>
            <p className={styles.benefitDesc}>
              Cafe will serve at the most pleasant prices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
