import React from 'react';

const Inputs = ({ tipo, clase, texto }) => {
  return (
    <input type={tipo} className={clase} placeholder={texto}/>
  );
};

export default Inputs;