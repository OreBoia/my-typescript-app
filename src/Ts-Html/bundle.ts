// app.ts

const btn = document.getElementById("salutaBtn") as HTMLButtonElement;

const messaggio = document.getElementById("messaggio") as HTMLParagraphElement;


btn.addEventListener("click", () => {

    messaggio.textContent = "Ciao, benvenuto nel mondo di TypeScript e HTML!";
    
    const dynamicMessage = document.getElementById("dynamicMessage") as HTMLParagraphElement;

    if (!dynamicMessage) 
    {
        const messaggio2 = document.createElement("p");
        messaggio2.textContent = "Questo è un messaggio aggiunto dinamicamente.";
        document.body.appendChild(messaggio2);
        messaggio2.style.color = "blue";
        messaggio2.className = "dynamic-message";
        messaggio2.style.fontSize = "20px";
        messaggio2.id = "dynamicMessage";
    }

    if (dynamicMessage) 
    {
        dynamicMessage.addEventListener("mouseover", () => 
            {
            console.log("Il messaggio dinamico è stato trascinato!");
            dynamicMessage.style.backgroundColor = "lightyellow";
            dynamicMessage.style.cursor = "pointer";
            dynamicMessage.style.fontWeight = "bold";
            dynamicMessage.style.textDecoration = "underline";
        });
    }

});

