import Slider from "Slider.js";
const container = document.querySelector('.container')
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

const sliders = new Slider(sliderImages,container,left,right)