// Conteúdo da apostila: seleção de elementos, eventos e alteração do DOM.
const nome = document.querySelector('#nome');
const titulo = document.querySelector('#nome-no-campo');
const jogadores = document.querySelectorAll('.jogador');
const nomesNoCampo = document.querySelectorAll('.nome-jogador');
const quantidade = document.querySelector('#quantidade');
const situacao = document.querySelector('#situacao');

// O if evita executar este trecho nas páginas que não têm o formulário.
if (nome) {
  nome.addEventListener('input', function () {
    titulo.textContent = nome.value;
    if (nome.value == '') {
      titulo.textContent = 'Meu onze ideal';
    }
  });

  function atualizarCampo() {
    let total = 0;

    // O for percorre as onze listas de jogadores.
    for (let i = 0; i < jogadores.length; i++) {
      if (jogadores[i].value != '') {
        nomesNoCampo[i].textContent = jogadores[i].value;
        nomesNoCampo[i].classList.add('escalado');
        total = total + 1;
      } else {
        nomesNoCampo[i].textContent = 'Camisa disponível';
        nomesNoCampo[i].classList.remove('escalado');
      }
    }

    quantidade.textContent = total;
    situacao.textContent = 'Escolha um jogador em cada posição.';
    if (total == 11) {
      situacao.textContent = 'Time completo! Dê um nome e salve.';
    }
  }

  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].addEventListener('change', atualizarCampo);
  }

  // Também mostra a escalação quando abrimos a página de edição.
  atualizarCampo();
}
