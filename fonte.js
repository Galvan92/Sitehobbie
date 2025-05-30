function mostrarMensagem() {
  const frases = [
    "Hoje é um ótimo dia!",
    "Continue aprendendo sempre!",
    "Você é incrível!",
    "JavaScript é divertido!"
  ];
  
  const indice = Math.floor(Math.random() * frases.length);
  alert(frases[indice]);
}
