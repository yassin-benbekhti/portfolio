// main.js - pour tes scripts personnalisés

// Cette ligne attend que la page soit entièrement chargée
document.addEventListener("DOMContentLoaded", function () {

  // Sélectionne le formulaire s'il existe sur la page
  const form = document.querySelector("form");

  // Si on est sur une page qui contient un formulaire
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche l'envoi réel du formulaire
      alert("Merci pour votre message ! (fonctionnalité à activer)");
    });
  }

  // Exemple : ajouter une animation sur les cartes projets
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("scale-105");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("scale-105");
    });
  });

});
