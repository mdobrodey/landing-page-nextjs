import styles from './Button.module.css';

export default function Button({ variant = 'primary', children, href = '#' }) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
}
