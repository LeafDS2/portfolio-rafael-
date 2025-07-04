
const btnModoEscuro = document.getElementById("modoEscuroBtn");

btnModoEscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btnModoEscuro.textContent =
    document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});
