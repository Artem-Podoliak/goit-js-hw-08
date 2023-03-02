import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = `feedback-form-state`;

form.addEventListener('input', throttle(saveValue, 500));
form.addEventListener('submit', submitForm);
autocompleteFormIsLocal();

function saveValue(params) {
  const { email, message } = params.currentTarget.elements;

  const inputValue = {
    email: email.value,
    message: message.value,
  };

  const inputValueJson = JSON.stringify(inputValue);
  localStorage.setItem(localStorageKey, inputValueJson);
}

function submitForm(params) {
  params.preventDefault();
  params.currentTarget.reset();
  localStorage.removeItem(localStorageKey);
}

function autocompleteFormIsLocal(params) {
  const inputValueToLocal = localStorage.getItem(localStorageKey);
  const inputValueToLocalRevers = JSON.parse(inputValueToLocal);
  if (inputValueToLocalRevers) {
    form.email.value = inputValueToLocalRevers.email;
    form.message.value = inputValueToLocalRevers.message;
  }
}
