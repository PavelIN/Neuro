const rectangle = document.querySelector('.rectangle')

const circle = document.querySelector('.circle')

const square = document.querySelector('.square')


square.addEventListener('click', () => {
    square.classList.toggle("squareClick")
  });


circle.addEventListener('click', () => {
    circle.classList.toggle("circleClick")
  });



function rectangleClick () {
    rectangle.classList.toggle("rectangleClick")
}
rectangle.addEventListener('click', rectangleClick);

