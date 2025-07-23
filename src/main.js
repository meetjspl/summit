import { initHamburgerMenu } from './assets/js/hamburger.js';
import { initStickyNav } from './assets/js/sticky-nav.js';
import './assets/styles/main.scss';

initHamburgerMenu();
initStickyNav();

const initToggleAllDetails = () => {
  const toggleButton = document.querySelector('.agenda__toggle-all');

  if (!toggleButton) return;

  const agendaDay = toggleButton.closest('.agenda__day');
  const detailsElements = [...agendaDay.querySelectorAll('.agenda-talks-box')];

  const updateButtonState = () => {
    const anyOpen = detailsElements.some((details) => details.open);
    const isActive = anyOpen && detailsElements.length > 0;

    toggleButton.textContent = isActive
      ? 'Close all sessions details'
      : 'Open all sessions details';

    toggleButton.classList.toggle('agenda__toggle-all--active', isActive);
  };

  detailsElements.forEach((details) => {
    details.addEventListener('toggle', updateButtonState);
  });

  toggleButton.addEventListener('click', () => {
    const anyOpen = detailsElements.some((details) => details.open);

    detailsElements.forEach((details) => {
      details.open = !anyOpen;
    });

    updateButtonState();
  });

  updateButtonState();
};

document.addEventListener('DOMContentLoaded', initToggleAllDetails);
