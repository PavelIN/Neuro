import Slider from "./Slider.js";
const slideriItems = document.querySelector('.slider__items')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

 
let sliderImages = [
    {
   link:'/slider/images/sobakin1.jpg',
   alt:'собака'
},
{
    link:'/slider/images/sobakin2.jpg',
    alt:'собака'
 },
 {
    link:'/slider/images/sobakin3.jpg',
    alt:'собака'
 },
] 

 function generAte(){
   let img = document.createElement('img');
   img.classList.add('image')
 return img;
 }

 

const sliders = new Slider(sliderImages,slideriItems,right,left,generAte)

sliders.renderItems()

