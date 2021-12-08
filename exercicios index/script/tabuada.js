// tabuada completo 

function tabuada() {
    // input:numbers
    let num = window.document.getElementById('txtN'); 
    let tab = window.document.getElementById('seltab'); 

    if(num.value.length === 0 ) {
        window.alert('[ERRO] digite um número.'); 
    } else {
        // transform 
        let n = Number(num.value); 
        tab.innerHTML = ''; 
        let c = 1; 
        while (c <= 10) {
            let item = window.document.createElement('option');
            item.text = ` ${n} x ${c} = ${n*c}`; 
            item.value = ` ${c}`; 
            tab.appendChild(item); 
            c++; 
        }
    }
}