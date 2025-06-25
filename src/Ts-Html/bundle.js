"use strict";
// app.ts
const btn = document.getElementById("salutaBtn");
const messaggio = document.getElementById("messaggio");
btn.addEventListener("click", () => {
    messaggio.textContent = "Ciao, benvenuto nel mondo di TypeScript e HTML!";
});
