let minhaImagens = document.querySelector('img');

minhaImagens.onclick = function() {
    let meuSrc = minhaImagens.getAttribute('src');
    if(meuSrc === 'imagens/logo209x209-de-limpeza-diarista.png') {
      minhaImagens.setAttribute ('src','imagens/logo209x209-de-limpeza-diarista.png');
    } else {
      minhaImagens.setAttribute ('src','imagens/logo209x209-de-limpeza-diarista.png');
    }
}

let permicoes = 'permicoes';
if (permicoes === 'permicoes') {
  alert('Atenção: Este Site é Restrito, para Apenas Pessoas Autorizadas... Desfrute, de um Lindo Dia de Trabalho. Acesse nosso conteúdo de novas Propostas e Opções');
} else {
  alert('Aceite, agora esta Proposta...');
}

// document.querySelector('body').onclick = function() {//
//alert('Fazer Proposta de Orçamento Agora: Clique no Botão no Final da Página.');//

// função do botao para colocar nome //


// está trocado posição de nome - function defineNomeUsuario() { //

function setUserNome() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome) {
    setUserNome();
  } else {
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Diarista é legal, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  setUserNome();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Diarista é legal, ' + nomeGuardado;
}

meuButton.onclick = function() { 
   setUserNome();
}

let meuButton = document.querySelector('button');
let meuCabecalho = document.querySelector('h2');

// função do botao para colocar nome //

