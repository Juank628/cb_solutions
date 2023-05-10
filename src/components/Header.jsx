import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <h1>Llevando soluciones</h1>
        <p>Generando confianza</p>
      </div>
    </header>
  );
}
