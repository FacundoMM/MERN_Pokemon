import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
  const { word, color1, color2 } = useParams();
  const styles = {
    color: color1,
    backgroundColor: color2,
  };
  return <h1 style={styles}>{word}</h1>;
};

export default Color;
