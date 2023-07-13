/* dados primitivos são
string, number, boolean, undefined, null
são dados imutáveis) */

// Nessa parte tem uma demonstração pratica de dados imutaveis
// indices: 0123 então a letra L, é o indice 0 certo?
let nome = 'Luiz';
// aqui vou pedir, pro indice 0, mudar de L para R
nome[0] = 'R';
// e demonstrar na saída
console.log(nome[0]);
// como vocês podem ver, o indice 0, continua sendo L, porque ele é imútavel

/* deixando claro, que o que é imutavel é o valor, não o nome da varialvel, nossa variavel se chama
nome e pode ser alterado, mas o conteudo StylePropertyMapReadOnly, luiz, nunca
sera alterado*/

// ja no caso dos mutaveis, que são objetos, arrays e functions
//nessa array, o B tem o Valor = o de A, que é um array
let a = [1, 2, 3];
let b = a;
console.log(a, b);
//vamos supor, que adicionamos um elemento no conjunto do A
a.push(4);
//na saida, diferente do exemplo anterior, como se trata de um valor mutavel, em B vai ter alterado tambem
console.log(a, b);
