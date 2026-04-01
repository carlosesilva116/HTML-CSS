
// fetch(url)
// .then(resposta => resposta.json())
// .then(dados => console.log(dados))




const campoCep = document.querySelector('#cep');
const botaoBuscar = document.querySelector('#btnBuscar');

const campologradouro  = document.querySelector('#logradouro');
const campobairro = document.querySelector('#bairro');
const campocidade = document.querySelector('#cidade');
const campoestado = document.querySelector('#estado');

async function buscarCep(){

    const cepDigitado = campoCep.value;

    const url = `https://viacep.com.br/ws/${cepDigitado}/json/`;

   const resposta = await fetch(url);
   const dados = await resposta.json();
    console.log(dados);

    campologradouro.value = dados.logradouro;
    campobairro.value = dados.bairro;
    campocidade.value = dados.localidade;
    campoestado.value = dados.estado;

}

botaoBuscar.addEventListener('click', buscarCep);
