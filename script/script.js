const wayEvaluation = document.querySelector('.evaluation-number')
const wayDisplayHome = document.querySelector('section.container-display-home')
const wayDisplayTank = document.querySelector('section.container-display-tank')
const errorMsg = document.querySelector('p.error-msg')

let number = []

function selectNumber(num){
  number = []
  number.push(num)
}

function evaluation(){

  if(number.length == 0){
    errorMsg.innerHTML = 'Necessário selecionar um dos numeros!'
  }else{
    errorMsg.innerHTML = ''
    wayDisplayHome.style.display = 'none'
    wayDisplayTank.style.display = 'flex'

    wayEvaluation.innerHTML = number
  }

}

