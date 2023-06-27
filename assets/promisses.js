
/* função de randomizar o tempo, onde sempre vair gerar em ordem aleatória os times*/

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
/* função basica de tempo, dentro do espera ai, coloca a mensagem e o texto que vai conter nela, e o tempo de espera, para notificar*/
function esperaAi(msg, tempo) {
   /* é onde você está fazendo, uma promessa, que deve ser rejeitada ou resolvida com uma arrow function*/
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
        resolve(msg);
    }, tempo);
 });
}
 /* resolução das funções, "saida"*/
 esperaAi('Requisitando conexão com database', rand(1, 10))
 /*cria um uma função de respota, com o console.log mostrando a resposta*/
 .then(resposta => {
    console.log(resposta);
    /*novamente, requisita que execute as funções, para essa nova frase*/
    return esperaAi('estruturando dados da database', rand(1, 10));
 })
 /* novamente, requisa a resposta para a função acima*/
 .then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 10));
 })
.then(resposta => {
    console.log(resposta);
    return esperaAi('exibindo dados na tela', rand(1, 10));
})
.then(resposta => {
    console.log(resposta);
})
/*função que automaticamente, valida e rejeita, se não respeitar o "IF"*/
.catch(e => {
    console.log('ERRO:', e);
});

/* demonstrando e deixando fixado que, promisses sempre são executadas em paralelo, ou seja o motor do js, executa primeiro as funções, depois algo em paralelo, ele não deixa tudo parado e executa uma "promessa primeiro"*/
console.log(' demosntração q vai exibir primeiro')

/* dai o termo assincrono*/