const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.lightbox-close');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach((project) => {
      project.classList.toggle('hidden', filter !== 'all' && project.dataset.platform !== filter);
    });
  });
});

document.querySelectorAll('.project-image').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.dataset.alt;
    lightbox.showModal();
    document.body.classList.add('modal-open');
  });
});

function closeLightbox() {
  lightbox.close();
  document.body.classList.remove('modal-open');
  lightboxImage.src = '';
}

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener('close', () => document.body.classList.remove('modal-open'));
