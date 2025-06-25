// Definizione di un'interfaccia

interface Veicolo {

  marca: string;

  modello: string;

  anno: number;

  avvia(): void;

}


class Automobile implements Veicolo {

  constructor(public marca: string, public modello: string, public anno: number) {}


  avvia(): void {

    console.log(`${this.marca} ${this.modello} avviata.`);

  }

}


const auto: Veicolo = new Automobile("Fiat", "500", 2020);

auto.avvia();