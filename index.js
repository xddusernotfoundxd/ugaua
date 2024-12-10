let math = []
let d
let input = document.querySelector('input')
let button = document.querySelector('.prover')
let div = document.querySelector('div')
let button1 = document.querySelector('.nas')
for (let i = 1; i <= 1; i++){
  math.push(Math.floor(Math.random(i) * 100))
}
console.log(+math)
button.addEventListener('click', () => {
  if (input.value > +math){
    div.textContent = 'Введи число поменьше'
  } 
  if (input.value < +math){
    div.textContent = 'Введи число побольше'
  }
  if (input.value == +math){
    div.textContent = 'Ты угадал!'
    button1.style.display = 'block'
  }
})
button1.addEventListener('click', () => {
  location.reload()
})