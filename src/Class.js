"use strict";
// Definizione di un'interfaccia
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    avvia() {
        console.log(`${this.marca} ${this.modello} avviata.`);
    }
}
const auto = new Automobile("Fiat", "500", 2020);
auto.avvia();
