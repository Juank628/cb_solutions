import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Featured from '../components/Featured';
import electricBg from '../assets/img/electric_bg_4_3.jpg';
import electricIcon from '../assets/img/electric_icon.png';
import instrumentIcon from '../assets/img/instrument_icon.png';
import controlIcon from '../assets/img/control_icon.png';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <h2 className={styles.sectionTitle}>Servicios</h2>
      <hr className={styles.titleLine} />
      <div className={styles.servicesContainer}>
        <ServiceCard title="Instrumentación" icon={instrumentIcon} bgImage={electricBg} />
        <ServiceCard title="Control" icon={controlIcon} bgImage={electricBg} />
        <ServiceCard title="Sistemas eléctricos" icon={electricIcon} bgImage={electricBg} />
      </div>

      <h2 className={styles.sectionTitle}>Servicios Destacados</h2>
      <hr className={styles.titleLine} />
      <div className={styles.featuredContainer}>
        <Featured />
      </div>
    </main>
  );
}
