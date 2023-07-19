/* esses são os operadores de comparação existentes
>       maior que
>=      maior que ou igual a
<       menor que
<=      menor que ou igual a
==      igualdade (só checa valor) "quase nao usa"
===     igualdade estrita (checa valor e tipo)
!=      diferente
!==     diferente estrito
*/
// operador simples, o algoritmo vai verificar se 10 é maior que 5 e retornar verdadeiro ou falso
console.log(10 > 5);

// operador de 2 requisições, vai verificar se 10 é menor que 5 OU igual a 5 e retorna verdadeiro ou falso
console.log(10 <= 5);

/* Operador de igualdade simples, com só 2 ==, só chega valores pra gente ou seja
se um dos valores, não for um numero ele não converte, ele retorna com verdadeiro*/
console.log(10 == '10');
// ja o operador estrito, retorna com falso e identifica que ali está uma string
console.log(10 === '10');