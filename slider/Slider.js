export default class Slider {
  constructor(sliderImages, slideriItems, right, left, generAte) {
    this._sliderImages = sliderImages;
    this._slideriItems = slideriItems;
    this._generAte = generAte;
    this._right = right;
    this._left = left;
  }



  renderItems() {
   

    this._sliderImages.forEach((item) =>
      this._slideriItems.prepend(this._generateCard(item))
    );
    let slides = document.querySelectorAll("img");

    slides[0].classList.add("block")

    let i = 0;

    this._right.addEventListener("click", function () {
      ++i;
      if (i >= slides.length) {
        i = 0;
        slides[slides.length-1].classList.remove("block");
        slides[i].classList.add("block");
      } else{
      slides[i - 1].classList.remove("block");
      slides[i].classList.add("block");
      }
    });
    this._left.addEventListener("click", function () {
      --i;
      if(i < 0){
        i=slides.length-1
        slides[0].classList.remove("block");
        slides[slides.length-1].classList.add("block");
      }else{
        slides[i + 1].classList.remove("block");
        slides[i].classList.add("block");
      }
    });
    
  }

  _generateCard(item) {
    this._element = this._generAte();
    this._element.src = item.link;
    this._element.alt = item.alt;
    return this._element;
  }
}
