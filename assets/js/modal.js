const modalBtn = document.getElementById('wallpaper-calculator-modal-btn');
const modal = document.querySelector('.renodor-modal');
const closeModalBtns = document.querySelectorAll('.renodor-modal .close-modal');

closeModal = () => {
  modal.style.display = 'none';
};

modalBtn.addEventListener('click', (event) => {
  modal.style.display = 'flex';

  modal.addEventListener('click', (event) => {
    closeModal();
  });

  modal.querySelector('.modal-container').addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener('click', (event) => {
    closeModal();
  });
});

