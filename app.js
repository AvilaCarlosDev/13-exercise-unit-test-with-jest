// Tabla de conversión base: 1 EUR = ...
const oneEuroIs = {
  JPY: 156.5, // yen japonés
  USD: 1.07, // dólar estadounidense
  GBP: 0.87, // libra esterlina
};

// Función para convertir de EUR a USD
const fromEuroToDollar = (euroAmount) => {
  return euroAmount * oneEuroIs.USD;
};

// Función para convertir de USD a JPY
const fromDollarToYen = (dollarAmount) => {
  // Primero convertimos USD a EUR, luego EUR a JPY
  let euros = dollarAmount / oneEuroIs.USD;
  return euros * oneEuroIs.JPY;
};

// Función para convertir de JPY a GBP
const fromYenToPound = (yenAmount) => {
  // Primero convertimos JPY a EUR, luego EUR a GBP
  let euros = yenAmount / oneEuroIs.JPY;
  return euros * oneEuroIs.GBP;
};

// Exportamos todas las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
