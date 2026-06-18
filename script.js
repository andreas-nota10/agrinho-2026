// rolagem suave para seção
function irPara(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// mostrar/ocultar respostas
function toggle(btn) {
  const resposta = btn.nextElementSibling;
  resposta.style.display = resposta.style.display === "block" ? "none" : "block";
}

// flip card
function girar(card) {
  card.classList.toggle("virado");
}

// GRÁFICO SIMPLES
const ctx = document.getElementById("chart").getContext("2d");

const dados = {
  labels: ["Agricultura", "Indústria", "Serviços"],
  valores: [40, 25, 35]
};

function desenharGrafico() {
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Impacto na economia (%)", 10, 20);

  let x = 50;
  dados.valores.forEach((v, i) => {
    ctx.fillStyle = ["green", "blue", "orange"][i];
    ctx.fillRect(x, 50, 50, v * 2);
    ctx.fillText(dados.labels[i], x, 170);
    x += 100;
  });
}

desenharGrafico();
