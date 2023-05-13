const square = document.querySelector('.section');
square.classList.remove('section__content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        square.classList.add('section__content');
        return;
      }
      square.classList.remove('section__content');
    });
  });
  observer.observe(document.querySelector(''));