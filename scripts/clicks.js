// Ao passar o mouse
var bloco01 = window.document.getElementsByTagName('div')[1]
bloco01.addEventListener('mousemove', floatMouse)
bloco01.addEventListener('mouseout', sairmouseB1)

function floatMouse() {
    bloco01.innerHTML = 'Entrou!'
    bloco01.style.background = 'orangered'
}
function sairmouseB1() {
    bloco01.innerHTML = 'Saiu! Para ver novamente, mova o mouse.'
    bloco01.style.background = '#2a2a2a'

}

// Quando clicar 

var bloco02 = window.document.getElementsByTagName('div')[2]
bloco02.addEventListener('click', clique)
bloco02.addEventListener('mouseout', sairmouseB2)

function clique() {
    bloco02.style.width = '250px'
    bloco02.style.height = '30px'
    bloco02.style.background = 'transparent'
}

function sairmouseB2() {
    bloco02.style.width = '200px'
    bloco02.style.height = '200px'
    bloco02.style.background = '#2a2a2a'
}

// clique duplo 
var bloco03 = window.document.getElementsByTagName('div')[3]
bloco03.addEventListener('dblclick', duploclick)
bloco03.addEventListener('mouseout', sairmouseB3)

function duploclick() {
    bloco03.innerHTML = 'Transform'
    bloco03.style.background = 'red'
    bloco03.style.transform = 'rotate(360deg)'
    bloco03.style.borderRadius = '50px'
}

function sairmouseB3() {
    bloco03.innerHTML = 'Clique duplo &#10063;'
    bloco03.style.background = '#2a2a2a'
    bloco03.style.transform = 'rotate(0deg)'
    bloco03.style.height = '200px'
    bloco03.style.borderRadius = '0px'
}

// como eu fiz 
var bloco04 = window.document.getElementsByTagName('div')[4]
bloco04.addEventListener('mousedown', float_p)
bloco04.addEventListener('mouseout', sairmouseB4)

function float_p() {
    bloco04.innerHTML = 'Com HTML, CSS e JavaScript. '
    bloco04.style.height = '70px'
    bloco04.style.background = 'orangered'
}

function sairmouseB4() {
    bloco04.innerHTML = 'Como eu fiz? Clique uma vez &#10063;'
    bloco04.style.background = '#2a2a2a'
    bloco04.style.height = '200px'
}