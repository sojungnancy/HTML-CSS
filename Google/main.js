const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModal = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
