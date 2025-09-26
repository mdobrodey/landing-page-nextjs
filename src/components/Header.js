'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header} id="top">
      <div className={styles.container}>
        <a href="#" className={`${styles.logo} textGradient`}>
          StarBucks
        </a>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <a href="#" className={styles.link} onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a
            href="#products"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Select
          </a>
          <a
            href="#products"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Shop
          </a>
        </nav>
        <div
          className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}
    </header>
  );
}
