import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
  const { number } = useParams();
  return <h1>{isNaN(+number) ? 'Número no válido' : number}</h1>;
};

export default Number;
