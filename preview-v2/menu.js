const menuButton = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
function setMenu(open, restoreFocus = false) {
  mobileNav.classList.toggle('open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (!open && restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenu(false);
  const target = document.getElementById(link.hash.slice(1));
  if (target) {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', (event) => {
  if (event.matches && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
});
