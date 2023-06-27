// no caso da race, ele sempre retorna oq for mais rapido e executa os outros, mas sem exibir

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
         if(typeof msg !== 'string') reject(false);

         setTimeout(() => {
            resolve(msg.toUpperCase() + ' - passei na promise');
     }, tempo);
  });
 }


const promises = [
    esperaAi('promise 1', rand(1, 5)),
    esperaAi('promise 2', rand(1, 5)),
    esperaAi('promise 3', rand(1, 5)),
];
//.all e race, são semelhantes, diferença que o race finaliza, assim que resolver a primeira
Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });
