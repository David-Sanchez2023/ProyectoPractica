import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Colaboradores = () => {
  const { colaboradores } = useLoaderData();

  useEffect(() => {
    console.log(colaboradores);
  }, []);

  return <div>Colaboradores</div>;
};

export default Colaboradores;
