import React from 'react';
import SelectBox from './SelectBox';
import tempImg from '../assets/img/electric_bg_4_3.jpg';

export default function Featured() {
  const services = [
    {
      name: 'Programación',
      title: 'Desarrollo de lógica de control de bombas Geho',
      description: 'Programación de 10 bombas de desplazamiento positivo para la decarga de 4 espesadores de relaves. Se desarrolló el progrma en el PLC de cada bomba y en el DCS para la integración con el proceso.',
      image: tempImg,
    },
    {
      name: 'Instrumentación',
      title: 'Desarrollo de lógica de bombas Geho',
      description: 'this is the service 2',
      image: tempImg,
    },
    {
      name: 'Electricidad',
      title: 'Desarrollo de lógica de bombas Geho',
      description: 'this is the service 3',
      image: tempImg,
    },
  ];

  return (
    <SelectBox items={services} />
  );
}
