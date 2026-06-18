// scroll suave
function ir(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// FAQ
function toggle(btn) {
  const resp = btn.nextElementSibling;
  resp.style.display = resp.style.display === "block" ? "none" : "block";
}

// flip cards
function flip(el) {
  el.classList.toggle("ativo");
}

// GRÁFICO PROFISSIONAL
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Agricultura", "Indústria", "Serviços"],
    datasets: [{
      label: "% no PIB do Brasil",
      data: [26, 22, 52],
      backgroundColor: ["green", "blue", "orange"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } }
    }
  }
});
