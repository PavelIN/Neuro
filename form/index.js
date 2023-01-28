const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.form__input')
const nameErrors = document.querySelectorAll('.form__input-error')

const arrError = ['только кириллица/латиница, от 3 до 30 символов','Телефон - от 10 до 15 символов, состоит из цифр, может начинаться с плюса.','Пароль -  от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра, пароли должны совпадать.','Пароль -  от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра, пароли должны совпадать.']
const eror ="поле не может быть пустым"



form.addEventListener('submit',(event)=>{
  event.preventDefault();
  validate(inputs,nameErrors,arrError,eror)
})

function validate(inputs,nameErrors,arrError,eror) {
for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i])
  

  const validityState = inputs[i].validity;
if(inputs[2].value!=inputs[3].value){
  inputs[3].setCustomValidity('пароли не совпадают')
    nameErrors[3].innerHTML=inputs[3].validationMessage
}
  else if(validityState.valueMissing){
    inputs[i].setCustomValidity(eror)
    nameErrors[i].innerHTML=inputs[i].validationMessage
  }
  else if(!validityState.valid){
    inputs[i].setCustomValidity(arrError[i]) 
    nameErrors[i].innerHTML=inputs[i].validationMessage
}
  console.log(validityState)
}
}


