const button = document.querySelector(".button");
const elements = Array.from(document.querySelectorAll(".element"));

function vissible() {
  if (!elements[0].classList.contains("element_hiiden")) {
    elements.forEach((element) => {
      element.classList.add("element_hiiden");
    });
  } else {
    elements.forEach((element) => {
      element.classList.remove("element_hiiden");
    });
  }
}

function debounce(func, delay) {
   let isCooldown  = false;
  return function () {
    if (isCooldown ) return;
    func(...arguments);
    isCooldown  = true;
    setTimeout(() => {
      isCooldown  = false;
    }, delay);
  };
}

button.addEventListener("click", debounce(vissible, 3000));
