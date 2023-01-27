const button = document.querySelector(".button");
const container = document.querySelector(".container");


function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*15)];
  }
  return `#${code}`
 }


function generAte(){
  let square = document.createElement('div');
  square.classList.add('square')
  square.style.backgroundColor=generateColor()
return square;
}

const clickSquare =()=>{
  container.innerHTML = '';
  let random= 0
   random = Math.floor(Math. round(Math.random() * (100 - 20+1)+20));

for (let i = 0; i <= random; i++) {
  let elem = generAte()
  console.log(elem)
  container.append(elem)
}
}

button.addEventListener("click",clickSquare)