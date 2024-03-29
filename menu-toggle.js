document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.icon-menu');
  const menuClose = document.querySelector('.icon-close2');

  function toggleMenu() {
    document.querySelector('.site-mobile-menu').classList.toggle('active');
  }

  menuToggle.addEventListener('click', function() {
    toggleMenu();
  });

  menuClose.addEventListener('click', function() {
    toggleMenu();
  });
});
