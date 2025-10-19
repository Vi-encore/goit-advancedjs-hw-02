// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(isFulfilled = 'fulfilled', delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isFulfilled != 'fulfilled' ? reject(delay) : resolve(delay);
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  createPromise(state, delay)
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',

        backgroundColor: '#31c581',
        messageColor: 'white',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',

        backgroundColor: '#ff786eff',
        messageColor: 'white',
      });
    });
});
