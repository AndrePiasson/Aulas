/*criação de objetos basica, consiste em, criar um objeto, que no caso é a pessoa1 e dar atributos
a esse objeto, que são Nome,idade e sobrenome*/

const pessoa1 = {
nome: 'Luiz',
sobrenome: 'Miranda',
idade: 25
};

// comando basico para exibir na saida
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

// como criar uma função para criar objetos

//nossa função se chama criarpessoa, e tem, 3 parametros, nome, sobrenome e idade e deve sempre retornar eles
function CriarPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

// aqui é nossa constante, que define a pessoa dois e seus argumentos
const pessoa2 = CriarPessoa('André', 'Piasson', 23);
//comando para vermos na saída corretamente
console.log(pessoa2);