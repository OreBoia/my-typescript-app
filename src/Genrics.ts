function identita<T>(arg: T): T 
{
    return arg;
}

console.log("Identità:", identita<string>("Testo")); // Output: Identità: Testo

console.log("Identità:", identita<number>(123));       // Output: Identità: 123