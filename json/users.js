export default class Users {
    constructor(data) {
        this._id=data.id
        this._email=data.email
        this._first_name=data.first_name
        this._last_name=data.last_name
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector('.template')
        .content
        .querySelector('.user')
        .cloneNode(true);
      return cardElement;
    }
    
  
    _generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".id").textContent=this._id
      this._element.querySelector(".email").textContent=this._email
      this._element.querySelector(".first_name").textContent=this._first_name
      this._element.querySelector(".last_name").textContent=this._last_name
    }

    renderItem() {
        this._generateCard()
        document.querySelector('.users').append(this._element)
      };
    
  }
  