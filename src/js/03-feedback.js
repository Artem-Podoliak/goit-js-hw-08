import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = `feedback-form-state`;

form.addEventListener('input', throttle(saveValue, 500));
form.addEventListener('submit', submitForm);
autocompleteFormIsLocal();

function saveValue(params) {
  const email = form.email.value;
  const message = form.message.value;
  const inputValue = {
    email: email,
    message: message,
  };

  const inputValueJson = JSON.stringify(inputValue);
  localStorage.setItem(localStorageKey, inputValueJson);
}

function submitForm(params) {
  params.preventDefault();
  const feedback = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(feedback);
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
