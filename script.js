// Cuando cargue la página, aplicar animación a los artículos
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.posts-preview article').forEach((art, i) => {
    setTimeout(() => {
      art.classList.add('fade-in');
    }, i * 150);
  });
});
