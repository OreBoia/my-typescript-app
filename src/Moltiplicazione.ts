function moltiplica(a: number, b: number): number {

    return a * b;

}

const risultato: number = moltiplica(4, 5);

console.log(`Moltiplicazione: ${risultato}`); // Output: Moltiplicazione: 20

function MoltiplicaDefaultValue(a: number, b: number = 2): number 
{
    return a * b;
}

console.log("Moltiplicazione:", MoltiplicaDefaultValue(5, 10)); // Output: Moltiplicazione: 10