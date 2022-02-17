// conteiners jQuery 

var botao = window.document.getElementsByClassName('botao_mais'); 

// o que é - jQuery 

botao[0].addEventListener('click', function() {
    let paragrafo_01 = window.document.getElementById('paragrafo_01'); 

    if (paragrafo_01.style.display === 'block') {
        paragrafo_01.style.display = 'none'; 
        botao[0].innerHTML = '+'; 
    } else {
        paragrafo_01.style.display = 'block'; 
        botao[0].innerHTML = '-'; 
    }
}); 

// para que serve - jQuery 

botao[1].addEventListener('click', function() {
    let paragrafo_02 = window.document.getElementById('paragrafo_02'); 

    if (paragrafo_02.style.display === 'block') {
        paragrafo_02.style.display = 'none'; 
        botao[1].innerHTML = '+'; 
    } else {
        paragrafo_02.style.display = 'block'; 
        botao[1].innerHTML = '-'; 
    }
}); 

// para que serve - jQuery 

botao[2].addEventListener('click', function() {
    let paragrafo_03 = window.document.getElementById('paragrafo_03'); 

    if (paragrafo_03.style.display === 'block') {
        paragrafo_03.style.display = 'none'; 
        botao[2].innerHTML = '+'; 
    } else {
        paragrafo_03.style.display = 'block'; 
        botao[2].innerHTML = '-'; 
    }
}); 