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
    'Primeiro Valor',
    esperaAi('promise 1', 3),
    esperaAi('promise 2', 0.5),
    esperaAi('promise 3', 1),
    'Outro Valor'
];
//.all e race, são semelhantes, diferença que o race finaliza, assim que resolver a primeira
Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

