const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieDrawn = document.getElementById("cookieDrawn")
const anotherCookie = document.getElementById("btnAnotherCookie")
const boxCookie = document.querySelector(".boxCookie")
const phrasesFortune = [`Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`,`Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.`,`Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.`,`Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.`,`Não é a carga que o derruba, mas a maneira como você a carrega.`,`Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.`,`Não há nada como regressar a um lugar que está igual para descobrir o quanto a gente mudou.`,`A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.`,`Eu não sonhei com sucesso. Eu trabalhei para ele.`,`Não espere por grandes líderes; faça você mesmo, pessoa a pessoa. Seja leal às ações pequenas porque é nelas que está a sua força.`,`Encare suas inseguranças de frente. Elas são apenas obstáculos temporários na sua jornada de sucesso.`,`Cada queda é uma chance de se levantar mais forte.`,`Ninguém vence sempre. Se você conseguir se levantar depois de uma derrota arrasadora e continuar lutando para vencer de novo, um dia você será campeã.`,`O tamanho dos seus sonhos deve sempre exceder a sua capacidade de alcançá-los. Se os seus sonhos não te assustam, eles não são grandes o suficiente.`
]
let phraseRandom = Math.floor(Math.random() * phrasesFortune.length)


// Events
cookieDrawn.addEventListener("click", openFortuneCookie)
anotherCookie.addEventListener("click", openAnotherFortuneCookie)


function openFortuneCookie() {
    toggleScreen()

    boxCookie.querySelector("p").innerText = phrasesFortune[phraseRandom]
}

function openAnotherFortuneCookie() {
    toggleScreen()

    phraseRandom = Math.floor(Math.random() * phrasesFortune.length)
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}