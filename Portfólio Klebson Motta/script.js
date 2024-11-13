document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", function() {
        const panel = this.nextElementSibling; // Seleciona o próximo elemento (o painel)
        panel.style.display = panel.style.display === "block" ? "none" : "block"; // Alterna a exibição
    });
});