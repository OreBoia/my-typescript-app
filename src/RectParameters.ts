function sommaTutti(...numeri: number[]): number 
{
    return numeri.reduce((acc, curr) => acc + curr, 0);
}

console.log("Somma Totale:", sommaTutti(1, 2, 3, 4, 5, 15, 14.2, 89, 87)); // Output: Somma Totale: 10