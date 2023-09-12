export const getColaboradores = async () => {
  const response = await fetch(
    "https://apiservices.medicatel.red/ApiTest/colaboradores"
  );
  const data = await response.json();
  return data;
};

export const colaboradoresLoader = async () => {
  const colaboradores = await getColaboradores();
  return colaboradores;
};
