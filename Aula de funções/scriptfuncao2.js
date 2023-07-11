//função de soma, assim você informa somente os valores de x e y
function soma(x, y) {
    const resultado = x+ y;
    return resultado;
    }
//função de subtração, assim você informa somente os valores de x e y
function subtrai(x, y) {
    const resultado = x- y;
    return resultado;
} 
//função de Multiplicação, assim você informa somente os valores de x e y
function multiplica(x, y) {
    const resultado = x* y;
    return resultado;
}
//função de divisão, assim você informa somente os valores de x e y
function divide(x, y) {
    const resultado = x/ y;
    return resultado;
}
// comando para demonstrar a função na tela
    const resultado = divide(10, 3);
    console.log(resultado);

//Outro metodo de criar funções é criando ela dentro da própria variavel

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

// outro metodo mais moderno e recente, é usarmos arrow function, simplificando bastante e otimizando

//como podes ver, fica bem mais simples, elimina as palavras function e return e tira os parentes e chaves.
const raiz = n => n ** 0.5;

console.log(raiz(9));

// na ideia de código moderna, usamos uma função menor possivel, pra fazer uma unica tarefa