// scroll automático via menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// FAQ
function toggle(btn) {
  const resp = btn.nextElementSibling;
  resp.style.display = resp.style.display === "block" ? "none" : "block";
}

// flip cards
function flip(card) {
  card.classList.toggle("ativo");
}

// gráfico profissional
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Agronegócio", "Indústria", "Serviços"],
    datasets: [{
      data: [27, 22, 51],
      backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b"]
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    }
  }
});
