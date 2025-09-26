import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.footerNav}>
          <div className={styles.footerBlock}>
            <a href="#" className={`${styles.logo} textGradient`}>
              StarBucks
            </a>
            <div className={styles.footerCols}>
              <div className={styles.footerCol}>
                <p className={styles.footerTitle}>Main</p>
                <a href="#products" className={styles.footerLink}>Buy</a>
                <a href="#products" className={styles.footerLink}>More</a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerTitle}>We make</p>
                <a href="#wemake" className={styles.footerLink}>Process</a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerTitle}>Products</p>
                <a href="#products" className={styles.footerLink}>Cappuccino</a>
                <a href="#products" className={styles.footerLink}>Fast</a>
                <a href="#products" className={styles.footerLink}>Fast</a>
              </div>
              <div className={styles.footerCol}>
                <p className={styles.footerTitle}>Events</p>
                <a href="#events" className={styles.footerLink}>Coffee</a>
                <a href="#events" className={styles.footerLink}>Tour</a>
              </div>
            </div>
          </div>
          <a href="#top" className={styles.footerUp}>
            <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.749998 42.1074C0.749998 48.1694 0.750069 52.6827 0.970701 56.2861C1.19098 59.8835 1.62869 62.5258 2.48242 64.8496C5.34156 72.632 11.4754 78.7659 19.2578 81.625C21.5816 82.4787 24.2239 82.9164 27.8213 83.1367C31.4247 83.3574 35.938 83.3574 42 83.3574C48.062 83.3574 52.5753 83.3574 56.1787 83.1367C59.7761 82.9164 62.4184 82.4787 64.7422 81.625C72.5246 78.7659 78.6584 72.632 81.5176 64.8496C82.3713 62.5258 82.809 59.8835 83.0293 56.2861C83.2499 52.6827 83.25 48.1694 83.25 42.1074C83.25 36.0454 83.2499 31.5322 83.0293 27.9287C82.809 24.3313 82.3713 21.6891 81.5176 19.3652C78.6584 11.5828 72.5246 5.44899 64.7422 2.58985C62.4184 1.73612 59.7761 1.29841 56.1787 1.07813C52.5753 0.857496 48.062 0.857424 42 0.857424C35.938 0.857423 31.4247 0.857495 27.8213 1.07813C24.2239 1.29841 21.5816 1.73612 19.2578 2.58984C11.4754 5.44899 5.34157 11.5828 2.48242 19.3652C1.62869 21.689 1.19099 24.3313 0.970702 27.9287C0.75007 31.5321 0.749998 36.0454 0.749998 42.1074Z" stroke="url(#paint0_linear_1_288)" strokeWidth="1.5"/>
              <path d="M41.25 60.1074C41.25 60.5216 41.5858 60.8574 42 60.8574C42.4142 60.8574 42.75 60.5216 42.75 60.1074L41.25 60.1074ZM42.5303 24.5771C42.2374 24.2842 41.7626 24.2842 41.4697 24.5771L36.6967 29.3501C36.4038 29.643 36.4038 30.1178 36.6967 30.4107C36.9896 30.7036 37.4645 30.7036 37.7574 30.4107L42 26.1681L46.2426 30.4107C46.5355 30.7036 47.0104 30.7036 47.3033 30.4107C47.5962 30.1178 47.5962 29.643 47.3033 29.3501L42.5303 24.5771ZM42.75 60.1074L42.75 25.1074L41.25 25.1074L41.25 60.1074L42.75 60.1074Z" fill="url(#paint1_linear_1_288)"/>
              <defs>
                <linearGradient id="paint0_linear_1_288" x1="54.9419" y1="84.1074" x2="58.0642" y2="20.2358" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#237249"/>
                  <stop offset="1" stopColor="#35C66B"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_288" x1="42.6541" y1="25.1074" x2="54.2758" y2="31.8999" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#237249"/>
                  <stop offset="1" stopColor="#35C66B"/>
                </linearGradient>
              </defs>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}