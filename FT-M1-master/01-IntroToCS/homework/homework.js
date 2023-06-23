'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let binario = num.toString();
   let binarioInvertido = binario.split('').reverse().join('');
   for (let i = 0; i < binarioInvertido.length; i++) {
      if (binarioInvertido[i] == 1) {
         decimal += Math.pow(2, i);
      }
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = '';
   let numero = num;
   while (numero > 0) {
      binario += numero % 2;
      numero = Math.floor(numero / 2);
   }
   return binario.split('').reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
