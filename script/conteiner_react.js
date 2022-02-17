// mostrar e ocultar sobre react

var botao = window.document.getElementsByClassName('botao_mais'); 

// div 01 - o que é 

botao[0].addEventListener('click', function() {
    let paragrafo01 = window.document.getElementById('paragrafo_01'); 

    if (paragrafo01.style.display === 'block') {
        paragrafo01.style.display = 'none'; 
        botao[0].innerHTML = '+'; 
    } else {
        paragrafo01.style.display = 'block'; 
        botao[0].innerHTML = '-'; 
    }
})

// para que serve 

botao[1].addEventListener('click', function() {
    let paragrafo02 = window.document.getElementById('paragrafo_02'); 

    if (paragrafo02.style.display === 'block') {
        paragrafo02.style.display = 'none'; 
        botao[1].innerHTML = '+'; 
    } else {
        paragrafo02.style.display = 'block'; 
        botao[1].innerHTML = '-'; 
    }
});

// beneficios 

botao[2].addEventListener('click', function() {
    let paragrafo03 = window.document.getElementById('paragrafo_03'); 

    if (paragrafo03.style.display === 'block') {
        paragrafo03.style.display = 'none'; 
        botao[2].innerHTML = '+'; 
    } else {
        paragrafo03.style.display = 'block'; 
        botao[2].innerHTML = '-'; 
    }
}); 

// Quando usar 

botao[3].addEventListener('click', function() {
    let paragrafo04 = window.document.getElementById('paragrafo_04'); 

    if (paragrafo04.style.display === 'block') {
        paragrafo04.style.display = 'none'; 
        botao[3].innerHTML = '+'; 
    } else {
        paragrafo04.style.display = 'block'; 
        botao[3].innerHTML = '-'; 
    }
})