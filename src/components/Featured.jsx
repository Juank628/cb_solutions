import React from 'react';
import SelectBox from './SelectBox';
import tempImg from '../assets/img/electric_bg_4_3.jpg';

export default function Featured() {
  const services = [
    {
      id: 1,
      name: 'Control',
      title: 'Integración de bombas Geho a DCS de planta',
      description: 'La integración de equipos de terceros en el sistema de control de planta, es un reto que debe ser abordado correctamente para evitar problemas durante la operación. \n \n En este servicio, una reconocida empresa minera nos solicitó integrar 10 bombas de desplazamiento positivo al DCS de planta. Cada bomba contaba con su propio PLC, y el trabajo consistió en adaptar la lógica de cada PLC y desarrollar la programación en el DCS para que la operación se realice desde sala de control, considerando toda la información requerida para la operación. \n \n Además de las variables básicas requeridas por el operador como arranque, parada y estado de la bomba, fue muy útil la integración de las alarmas y el desarrollo de la lógica de causa de detención, que pemite al operador conocer la causa de cada parada para ser atendida rápidamente',
      image: tempImg,
    },
    {
      id: 2,
      name: 'Instrumentación',
      title: 'Desarrollo de lógica de bombas Geho',
      description: 'this is the service 2',
      image: tempImg,
    },
    {
      id: 3,
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
