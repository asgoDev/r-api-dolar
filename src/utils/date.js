const monthList = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const getLocalDate = () => {
  const date = new Date();
  const localDate = `${date.getDate()} de ${monthList[date.getMonth()]} de ${date.getFullYear()}`;
  console.log(localDate);
  return localDate
};

// Trabajar esto con POO y que cada metodo devuelva el resultado deseado