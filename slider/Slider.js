export default class Slider {
    constructor(sliderImages,container,right,left) {
      this._sliderImages = sliderImages;
      this._container = container;
      this._right = right;
      this._left = left;
    }
  
    addItem(element) {
        this._container.prepend(element);
      };
   
  }