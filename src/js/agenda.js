function toggleDescription(description) {
  if (description.getAttribute('aria-expanded') === 'true') {
    description.setAttribute('aria-expanded', 'false');
  } else {
    description.setAttribute('aria-expanded', 'true');
  }
}

export const initAgenda = () => {
  const buttons = Array.from(document.querySelectorAll('.js-agenda-button'));

  buttons
    .map(btn => {
      const description = btn.parentElement.querySelector('.agenda__description-text');
      return { btn, description };
    })
    .forEach(({ btn, description }) => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        toggleDescription(description);
      });

      description.setAttribute('aria-expanded', 'false');
    });
};
