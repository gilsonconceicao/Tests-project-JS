// mostrar e ocultar o menu da page 

var botao = window.document.getElementById('btn_menu'); 

botao.addEventListener('click', function() {
    // list_menu 
    let list = window.document.getElementById('list_menu'); 
    let titulo = window.document.getElementById('t_main'); 

    if (list.style.display === 'block') {

        list.style.display = 'none'; 
        botao.innerHTML = '&#9776;'; 
    } else {
        list.style.display = 'block'; 
        botao.innerHTML = '&#10006;'
    }
}); 