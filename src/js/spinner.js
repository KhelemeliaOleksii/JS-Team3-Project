const spinner = document.querySelector('#spinner');
const searchButton = document.querySelector('#search-button');

console.log('Spinner - ', spinner);
console.log('Search button - ', searchButton);

export function showSpinner() {
  console.log('Show spinner');
  spinner.classList.add('visible');
  spinner.classList.remove('invisible');
}

export function hideSpinner() {
  spinner.classList.add('invisible');
  spinner.classList.remove('visible');
}

function clickSearchButton() {
  showSpinner();
  setTimeout(() => {
    hideSpinner();
  }, 3000);
}

searchButton.addEventListener('click', clickSearchButton);
