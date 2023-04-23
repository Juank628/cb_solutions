import React from 'react';
import styles from './Navbar.module.scss';
import menuIcon from '../assets/img/menu_icon.png';

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoArea}>
        <p>
          CB
          <span>solutions</span>
        </p>
      </div>
      <div className={styles.menuArea}>
        <div className={styles.mobileMenu}>
          <img src={menuIcon} alt="menu" />
        </div>
        <div className={styles.desktopMenu}>
          <ul className={styles.menuRow}>
            <li><a href="/#">servicios</a></li>
            <li>|</li>
            <li><a href="/#">sectores</a></li>
            <li>|</li>
            <li><a href="/#">clientes</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
