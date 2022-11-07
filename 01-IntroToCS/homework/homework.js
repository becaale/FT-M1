'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numDecimal = 0;
  let numBinario = num.split("").reverse().join("");

  for (let i = 0; i < numBinario.length; i++){
    numDecimal += numBinario[i] * 2 ** i;
  } 

  return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let numDecimal = num;
  let numBinario = [];

  while (numDecimal>0){
    numBinario.push(numDecimal%2)
    numDecimal = Math.floor(numDecimal / 2)
  }
 return numBinario.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}