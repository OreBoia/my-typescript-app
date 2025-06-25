"use strict";
function moltiplica(a, b) {
    return a * b;
}
const risultato = moltiplica(4, 5);
console.log(`Moltiplicazione: ${risultato}`); // Output: Moltiplicazione: 20
function MoltiplicaDefaultValue(a, b = 2) {
    return a * b;
}
console.log("Moltiplicazione:", MoltiplicaDefaultValue(5, 10)); // Output: Moltiplicazione: 10
