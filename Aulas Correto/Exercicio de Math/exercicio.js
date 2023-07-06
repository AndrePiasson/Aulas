const numero = Number(prompt('Digite aqui seu número favorito'));
const numeroEscolhido = document.getElementById('numero-escolhido');
const numeroum = document.getElementById('texto');
const numeroDois = document.getElementById('texto2');
const numeroTres = document.getElementById('texto3');
const numeroQuatro = document.getElementById('texto4');


numeroEscolhido.innerHTML = numero;
numeroum.innerHTML = `<p>A raiz quadrada do seu número é ${numero ** 0.5} </p>`;
numeroDois.innerHTML = `<p> O seu número é inteiro: ${(Number.isInteger(numero))}</p>`;
numeroTres.innerHTML = `<p> Seu número arredondado pra baixo = ${Math.floor(numero)}</p>`;
numeroQuatro.innerHTML = `<p> Seu número arredondado pra cima é = ${Math.ceil(numero)}`;