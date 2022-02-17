// mostrando conteiners - Angular 

var botao = window.document.getElementsByClassName('botao_mais'); 

// o que é - angular 

botao[0].addEventListener('click', function() {
    let paragrafo_01 = window.document.getElementById('paragrafo_01'); 

    if (paragrafo_01.style.display === 'block') {
        paragrafo_01.style.display = 'none'; 
    } else {
        paragrafo_01.style.display = 'block'; 
    }
}); 

// para que serve - angular 

botao[1].addEventListener('click', function() {
    let paragrafo_02 = window.document.getElementById('paragrafo_02'); 

    if (paragrafo_02.style.display === 'block') {
        paragrafo_02.style.display = 'none'; 
    } else {
        paragrafo_02.style.display = 'block'; 
    }
}); 

// para que serve - angular 

botao[2].addEventListener('click', function() {
    let paragrafo_03 = window.document.getElementById('paragrafo_03'); 

    if (paragrafo_03.style.display === 'block') {
        paragrafo_03.style.display = 'none'; 
    } else {
        paragrafo_03.style.display = 'block'; 
    }
}); 