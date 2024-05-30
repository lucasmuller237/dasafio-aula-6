function somaWhile() {
  let soma = 0;
  let i = 0;
  
  while (i < 5) {
    let numero = parseFloat(prompt("Digite um número:"));
    soma += numero;
    console.log("Número atual: " + numero);
    console.log("Soma parcial: " + soma);
    i++;
  }
  
  console.log("Soma total: " + soma);
  alert("Soma total: " + soma);
}

somaWhile();
