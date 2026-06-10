async function calculer() {
let age = document.getElementById("age").value;
let poids = document.getElementById("poids").value;
let taille = document.getElementById("taille").value;

document.getElementById("resultat").innerText =
"Analyse IA en cours...";

let response = await fetch("URL_RENDER_ICI/ask", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ age, poids, taille })
});

let data = await response.json();

document.getElementById("resultat").innerText = data.result;
}
