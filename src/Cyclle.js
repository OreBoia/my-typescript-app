"use strict";
// Array di numeri con tipizzazione esplicita
const numeri = [1, 2, 3, 4, 5];
// Ciclo for classico con indice
for (let i = 0; i < numeri.length; i++) {
    console.log(`Elemento ${i}: ${numeri[i]}`);
}
// Ciclo while
let j = 0;
while (j < numeri.length) {
    console.log(`Elemento ${j}: ${numeri[j]}`);
    j++;
}
// Ciclo for...of (molto utile per iterare su array)
for (const num of numeri) {
    console.log(`Numero: ${num}`);
}
