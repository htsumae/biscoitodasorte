const verifyCookieClick = document.getElementById('cookie')
const verifyBtnClick = document.getElementById('btn-cookie')
const AlternateScreen = document.querySelector(".broken-cookie")

const randomPhrasesList = [
  "A vida trará coisas boas se tiver paciência.",
"Não compense na ira o que lhe falta na razão.",
"Defeitos e virtudes são apenas dois lados da mesma moeda",
"Não importa o tamanho da montanha, ela não pode tapar o sol."
]

console.log(randomPhrasesList[1])

verifyCookieClick.addEventListener('click', (event) => {
  AlternateScreen.classList.remove('hide')
})

verifyBtnClick.addEventListener('click',(event) => {
  AlternateScreen.classList.add('hide')
})

