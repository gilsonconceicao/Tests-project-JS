// mostrar e ocultar conteiners 

var btn01 = window.document.getElementById('box01_btn'); 

btn01.addEventListener('click', function() {
    // paragrafo 
    let paragrafo_1 = window.document.getElementById('paragrafo_01'); 

    if (paragrafo_1.style.display === 'block') {
        paragrafo_1.style.display = 'none'; 
        btn01.innerHTML = '+'
    } else {
        paragrafo_1.style.display = 'block'; 
        btn01.innerHTML = '-'
    }
}); 

var btn02 = window.document.getElementById('box01_btn02'); 

btn02.addEventListener('click', function() {
    // paragrafo 
    let paragrafo_02 = window.document.getElementById('paragrafo_02'); 
    
    if (paragrafo_02.style.display === 'block') {
        paragrafo_02.style.display = 'none'; 
        btn02.innerHTML = '+'
    } else {
        paragrafo_02.style.display = 'block'; 
        btn02.innerHTML = '-'
    }
}); 

var btn03 = window.document.getElementById('box01_btn03'); 

btn03.addEventListener('click', function() {
    // paragrafo 
    let paragrafo_03 = window.document.getElementById('paragrafo_03'); 
    
    if (paragrafo_03.style.display === 'block') {
        paragrafo_03.style.display = 'none'; 
        btn03.innerHTML = '+'
    } else {
        paragrafo_03.style.display = 'block'; 
        btn03.innerHTML = '-'
    }
}); 

var btn04 = window.document.getElementById('box01_btn04'); 

btn04.addEventListener('click', function() {
    // paragrafo 
    let paragrafo_04 = window.document.getElementById('paragrafo_04'); 
    
    if (paragrafo_04.style.display === 'block') {
        paragrafo_04.style.display = 'none'; 
        btn04.innerHTML = '+'
    } else {
        paragrafo_04.style.display = 'block'; 
        btn04.innerHTML = '-'
    }
}); 