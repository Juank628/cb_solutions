import React from 'react';
import styles from './Footer.module.scss';
import whatsappLogo from '../assets/img/whatsapp_logo.png';
import emailLogo from '../assets/img/email_logo.png';

export default function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.logoArea}>
        <p>
          CB
          <span>solutions</span>
        </p>
      </div>
      <div className={styles.contact}>
        <a href="https://wa.me/982721661" target="_blank" className={styles.contactItem} rel="noreferrer">
          <img src={whatsappLogo} alt="whatsapp" />
          <p>982-721-661</p>
        </a>
        <div className={styles.contactItem}>
          <img src={emailLogo} alt="whatsapp" />
          <p>info@cb.solutions.pe</p>
        </div>
      </div>
    </section>
  );
}
