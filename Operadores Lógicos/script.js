/* 
São os operadores lógicos:
&& -> AND -> E Mesma ideia do E na matematica
|| -> OR -> OU significa ou
! -> NOT -> NÃO sinal de negação
*/

// exemplo usando &&

// usando && todas as 3 expressões tem de ser verdadeiras ou retorna falso
console.log(true && true && true);
// exemplo retornando falso]
console.log(true && false && true);

//exemplo de uso ||

// usando || se uma das expressoes, tiver true, ela retorna como verdadeira
console.log(true || false || false);
// exemplo retornando falso, teria que todas as expressões retornarem falsas
console.log(false || false || false);