/*
 Author: Diego Adrian<adry.dabp@gmail.com>
 Final Test: Bases de javascript
 Date: 23/11/2022
 University: USIP
*/

console.log("Aqui ira todo tu codigo...EXITOS !!!");
// Objeto que contiene las tasas de cambio relativas a cada moneda
const tasasDeCambio = {
  boliviano: {
    dolar: 0.145,      // 1 boliviano = 0.145 dólares
    chileno: 134.66,   // 1 boliviano = 134.66 pesos chilenos
    mexicano: 2.82,    // 1 boliviano = 2.82 pesos mexicanos
    argentino: 0.0072  // 1 boliviano = 0.0072 pesos argentinos
  },
  chileno: {
    boliviano: 0.0074, // 1 peso chileno = 0.0074 bolivianos
    dolar: 0.0011,     // 1 peso chileno = 0.0011 dólares
    mexicano: 47.82,   // 1 peso chileno = 47.82 pesos mexicanos
    argentino: 0.97    // 1 peso chileno = 0.97 pesos argentinos
  },
  mexicano: {
    boliviano: 0.36,   // 1 peso mexicano = 0.36 bolivianos
    chileno: 0.021,    // 1 peso mexicano = 0.021 pesos chilenos
    dolar: 0.052,      // 1 peso mexicano = 0.052 dólares
    argentino: 0.020   // 1 peso mexicano = 0.020 pesos argentinos
  },
  argentino: {
    boliviano: 0.0072, // 1 peso argentino = 0.0072 bolivianos
    chileno: 0.97,     // 1 peso argentino = 0.97 pesos chilenos
    mexicano: 0.020,   // 1 peso argentino = 0.020 pesos mexicanos
    dolar: 0.0010      // 1 peso argentino = 0.0010 dólares
  },
  dolar: {
    boliviano: 6.90,   // 1 dólar = 6.90 bolivianos
    chileno: 0.0011,   // 1 dólar = 0.0011 pesos chilenos
    mexicano: 19.41,   // 1 dólar = 19.41 pesos mexicanos
    argentino: 1.00    // 1 dólar = 1 peso argentino
  }
};

function convertir() {
  const valore = parseFloat(document.getElementById("monto").value); // Cantidad a convertir
  const de = document.getElementById("de").value; // Moneda origen
  const a = document.getElementById("a").value;   // Moneda destino
  const input = document.getElementById("respuesta"); // Campo de resultado

  // Convertir los valores de "de" y "a" a los nombres de monedas que coinciden con el objeto `tasasDeCambio`
  const monedas = {
    "10": "boliviano",
    "20": "chileno",
    "30": "mexicano",
    "40": "argentino",
    "50": "dolar"
  };

  const monedaOrigen = monedas[de];
  const monedaDestino = monedas[a];

  // Verificar que exista la tasa de cambio entre las monedas seleccionadas
  if (tasasDeCambio[monedaOrigen] && tasasDeCambio[monedaOrigen][monedaDestino]) {
    const tasaCambio = tasasDeCambio[monedaOrigen][monedaDestino]; // Obtener la tasa de cambio
    const resultado = valore * tasaCambio; // Realizar la conversión
    input.value = resultado.toFixed(2); // Mostrar el resultado con 2 decimales
  } else {
    input.value = "Conversión no disponible"; // Mensaje de error si no hay tasa de cambio
  }
}

const btn = document.getElementById('calcular');
btn.addEventListener('click', convertir);
