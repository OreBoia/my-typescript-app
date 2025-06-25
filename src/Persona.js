"use strict";
// Esempio con classi e arrow function
class Persona {
    constructor(nome, eta) {
        this.nome = nome;
        this.eta = eta;
        this.descrivi = () => {
            return `Sono ${this.nome} e ho ${this.eta} anni.`;
        };
    }
}
const persona = new Persona("Alice", 30);
persona.eta = 31; // Modifica dell'età
persona.nome = "Bob"; // Modifica del nome
console.log(persona.descrivi());
