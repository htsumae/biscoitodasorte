const verifyCookieClickOnScreen1 = document.getElementById('cookie')
const verifyBtnClickOnScreen2 = document.getElementById('btn-cookie')
const alternateScreen = document.querySelector(".broken-cookie")
const resetAnimation = document.querySelector(".broken-cookie span")

const randomPhrasesList = [
  "A vida trará coisas boas se tiver paciência.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda",
"Não importa o tamanho da montanha, ela não pode tapar o sol."
]


verifyCookieClickOnScreen1.addEventListener('click', (event) => {
  alternateScreen.classList.remove('hide')

  if(randomPhrasesDrawn == 0) {
    alternateScreen.querySelector('p').innerText = `${randomPhrasesList[0]}`
  }
  if(randomPhrasesDrawn == 1) {
    alternateScreen.querySelector('p').innerText = `${randomPhrasesList[1]}`
  }
  if(randomPhrasesDrawn == 2) {
    alternateScreen.querySelector('p').innerText = `${randomPhrasesList[2]}`
  }
  if(randomPhrasesDrawn == 3) {
    alternateScreen.querySelector('p').innerText = `${randomPhrasesList[3]}`
  }
})

verifyBtnClickOnScreen2.addEventListener('click',(event) => {
  alternateScreen.classList.add('hide')
  randomPhrasesDrawn = ramdomNumberInterval(0, 3)

  resetAnimation.style.animationName = "none"

  requestAnimationFrame( () => {
    resetAnimation.style.animationName = ""
  })
})

function ramdomNumberInterval(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomPhrasesDrawn = ramdomNumberInterval(0, 3)
