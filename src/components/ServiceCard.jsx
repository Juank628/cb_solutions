import React from 'react';
import styles from './ServiceCard.module.scss';

export default function
img({ title, icon, bgImage }) {
  return (
    <div
      className={styles.container}
      style={
        {
          backgroundImage: `url(${bgImage})`,
        }
      }
    >
      <div className={styles.content}>
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </div>
    </div>
  );
}
