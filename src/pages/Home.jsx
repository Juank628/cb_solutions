import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Featured from '../components/Featured';
import Customers from '../components/Customers';
import electricBg from '../assets/img/electric_bg_4_3.jpg';
import electricIcon from '../assets/img/electric_icon.png';
import instrumentIcon from '../assets/img/instrument_icon.png';
import controlIcon from '../assets/img/control_icon.png';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />

      <h2 className={styles.sectionTitle}>CBsolutions</h2>
      <hr className={styles.titleLine} />
      <div className={styles.aboutContainer}>
        <p>
          Bienvenido a nuestra empresa de servicios de automatización industrial.
          Ofrecemos soluciones inteligentes y eficientes para optimizar procesos
          y aumentar la productividad. Nuestro equipo experto diseña,
          implementa y mantiene sistemas de control automatizados,
          adaptados a sus necesidades.
          Trabajamos con tecnología de vanguardia y proveedores líderes de la industria
          para ofrecer soluciones innovadoras y confiables. Además de la implementación,
          brindamos soporte continuo, incluyendo mantenimiento preventivo, diagnóstico y
          reparación, y actualizaciones tecnológicas.
        </p>
        <p className={styles.aboutForLargeScreens}>
          Nuestro enfoque se centra en comprender sus requerimientos y objetivos para
          desarrollar soluciones personalizadas que optimicen la eficiencia, reduzcan
          costos y aumenten la calidad. Si busca mejorar la eficiencia y productividad
          de su operación industrial, estamos aquí para ayudarlo. Contáctenos hoy mismo
          y descubra cómo nuestra empresa de automatización industrial puede llevar su
          negocio al siguiente nivel.
        </p>
      </div>

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

      <h2 className={styles.sectionTitle}>Clientes</h2>
      <hr className={styles.titleLine} />
      <div className={styles.featuredContainer}>
        <Customers />
      </div>

    </main>
  );
}
