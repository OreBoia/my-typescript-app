// Esempio con classi e arrow function

class Persona 
{
    constructor(public nome: string, public eta: number) {}


    descrivi = (): string => {

        return `Sono ${this.nome} e ho ${this.eta} anni.`;

    }

}


const persona = new Persona("Alice", 30);
persona.eta = 31; // Modifica dell'età
persona.nome = "Bob"; // Modifica del nome
console.log(persona.descrivi());