const loader = document.querySelector(".loader");

// Добавляете эту функцию когда нужно запустить спиннер
export function turnOnLoader() {
    loader.style.display = "block";
};
// Добавляете эту функцию когда нужно закрыть спиннер
export function turnOffLoader() {
    loader.style.display = "none";
};

turnOnLoader();
setTimeout(turnOffLoader, 2000);