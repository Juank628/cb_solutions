import React from 'react';
import styles from './Customers.module.scss';

export default function Customers() {
  return (
    <div className={styles.container}>
      <h3>Juan Perez</h3>
      <p>
        El servicio de CBsolucions superó mis espectativas.
        El equipo trabajó con mucha responsabilidad.
        Cuplieron con los entregables y sobretodo, trabajaron con mucha seguridad.
      </p>
    </div>
  );
}
