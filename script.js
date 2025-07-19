const botoes = document.querySelectorAll('.emoji-selector button');
const mensagemDiv = document.getElementById('mensagem');
const body = document.body;

const mensagens = {
  feliz: {
    texto: "Yay! Que bom te ver feliz! ✨💖",
    cor: "#ffe6f0"
  },
  triste: {
    texto: "Tá tudo bem chorar, viu? Vem cá, abraço quentinho 🧸💧",
    cor: "#d4e5ff"
  },
  bravo: {
    texto: "Respira fundo, meu docinho... vai passar, tá? 💢🍓",
    cor: "#ffdada"
  },
  soninho: {
    texto: "Hora do cochilinho encantado... boa noite, estrelinha 🌙💤",
    cor: "#e8ddff"
  },
  cool: {
    texto: "Uau, que estilosa você tá hoje! 😎💅✨",
    cor: "#d0fff2"
  }
};

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const mood = botao.getAttribute('data-mood');
    const data = mensagens[mood];

    mensagemDiv.textContent = data.texto;
    body.style.backgroundColor = data.cor;
  });
});


