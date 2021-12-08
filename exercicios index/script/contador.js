//contador completo 

function contador_completo() {
    // input:numbers
    let inicio = window.document.getElementById('txtI'); 
    let passo = window.document.getElementById('txtP');  
    let fim = window.document.getElementById('txtF'); 

    // resposta 
    let res = window.document.getElementById('res'); 

    if(inicio.value.length === 0 || passo.value.length === 0 || fim.value.length === 0) {
        window.alert('[ERRO] complete os dados corretamente'); 
    } else {
        // transform 
        let i = Number(inicio.value);  
        let p = Number(passo.value); 
        let f = Number(fim.value); 
        res.innerHTML = 'Contando...'; 
        if (p == 0 ) {
            window.alert('[ERRO] impossível contar, consideramos passo 1.'); 
            p = 1
        }
        if (i < f) {
            for (let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c}`; 
            }
        } else {
            for (let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c}`; 
            }
        }
    } 
}