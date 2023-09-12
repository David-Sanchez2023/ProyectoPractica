import React from 'react'

const Botones = ({ clase, texto }) => {
  return (
    <button className={clase}>{texto}</button>
  );
};

export default Botones;
