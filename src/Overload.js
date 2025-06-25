"use strict";
function descrivi(valore) {
    if (typeof valore === "number") {
        return `Il numero è ${valore}`;
    }
    else if (typeof valore === "string") {
        return `La stringa è "${valore}"`;
    }
    return "Tipo non supportato";
}
console.log(descrivi(42)); // Output: Il numero è 42
console.log(descrivi("Ciao TS")); // Output: La stringa è "Ciao TS"
