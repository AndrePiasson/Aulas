 /* utilizado uma função simples, que busca e valida, com getElemente, a primeira parte valida o CEP, buscando no site fornecedido*/
 function limpa_formulário_cep() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} 
else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

var cep = valor.replace(/\D/g, '');


if (cep != "") {

  
    var validacep = /^[0-9]{8}$/;

    /*Valida o formato do CEP.*/
    if(validacep.test(cep)) {

        /*Preenche os campos com "..." enquanto consulta webservice.*/
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        /*Cria um elemento javascript.*/
        var script = document.createElement('script');

        /*Sincroniza com o callback.*/
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        /*Insere script no documento e carrega o conteúdo.*/
        document.body.appendChild(script);

    } /*end if.*/
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} /*end if.*/
else {
    /*cep sem valor, limpa formulário.*/            limpa_formulário_cep();
}
};

/* parte do código da opção de boleto ou cartão, dando valor para se selecionado cartão, retornando com os campos, e dando display block, em caso de boleto*/

function exibirCampos() {
var opcao = document.getElementById("opcao").value;
var campoCartao = document.getElementById("campo-cartao");

if (opcao === "cartao") {
  campoCartao.style.display = "block";
} else {
  campoCartao.style.display = "none";
}
}