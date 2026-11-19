const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
const mobile = matchMedia('(max-width: 740px)');
document.documentElement.classList.add('js');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', String(menu.getAttribute('aria-expanded') !== 'true'));
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
    if (mobile.matches) menu.focus();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
mobile.addEventListener('change', closeMenu);

