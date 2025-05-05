//  Initialise Modal sur cookiesModal
const cookiesModal = new bootstrap.Modal(document.getElementById('cookiesModal'));
//  l'affiche au chargement de la page
cookiesModal.show();

// En cas de cookies acceptés
document.getElementById('yepCookies').addEventListener('click', () => {
  localStorage.setItem('cookiesConsent', 'accepted');
  cookiesModal.hide();
});

// En cas de cookies refusés
document.getElementById('nopCookies').addEventListener('click', () => {
  localStorage.setItem('cookiesConsent', 'rejected');
  cookiesModal.hide();
});
