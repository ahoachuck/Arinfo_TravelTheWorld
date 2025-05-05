// darkMode.js
// Récupération de l'élément toggle
const toggle = document.getElementById('toggle-dark');
const body = document.body;

// Si le thème est déjà défini dans le localStorage, on l'applique
// sinon on applique le thème par défaut (light)
if (localStorage.getItem('theme') === 'dark') {
  toggle.checked = true;
  body.classList.add('dark-mode');
}

// Ajout d'un écouteur d'événement sur le toggle
// pour changer le thème et le stocker dans le localStorage
toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
});
