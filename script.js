
function validateEmail(email) {
    // Regex para validação de e-mail
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function validateCPF(CPF) {
    // Regex para validação de CPF
    const regex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
    return regex.test(CPF);
  }




const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name=name]')
const inputEmail = document.querySelector('input[name=email]')
const inputCPF = document.querySelector('input[name=CPF]')

let isValidForm = false

const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')

}

// Agora será criado de fato a primeira validação para o campo NOME
const validateInput = () => {
    isValidForm = true
    if(!inputName.value){
        inputName.classList.add('invalid')
        inputName.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    }
        if(!validateEmail(inputEmail.value)){
        inputEmail.classList.add('invalid')
        inputEmail.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    }

          if(!validateCPF(inputCPF.value)){
        inputCPF.classList.add('invalid')
        inputCPF.nextElementSibling.classList.remove('error-hidden')
        isValidForm = false
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
    

    if (isValidForm) {
        // POST para o Backend
        form.remove()
        message.classList.remove('error-hidden')
        console.log('Validou envio')
    }
})

inputName.addEventListener('input', () => {
    resetInput(inputName)
})

inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)
})

inputCPF.addEventListener('input', () => {
    resetInput(inputCPF)
})