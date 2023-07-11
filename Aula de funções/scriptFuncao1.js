//função básica, de dar bom dia, pro nome que vc escolher, aqui você arruma a função
// e deixa só o nome a ser inserido
function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
    return 1234;
}
// coloca saudacao e seta o nome, pra sair na função corretamente

// assim o valor sempre retorna pra nossa variavel, podemos tambem, retirar o valor e não retornar, mas só gravar
const variavel = saudacao('luiz');
console.log(variavel);

