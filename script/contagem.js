// contagem completa 

function contagem() {
    // input`s numbers 
    let inicio = window.document.getElementById('txtI'); 
    let fim = window.document.getElementById('txtF'); 
    let passo = window.document.getElementById('txtP'); 

    // resposta 
    let res = window.document.getElementById('res'); 

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        window.alert('[ERRO] digite os dados por comleto.'); 
    } else {
        let i = Number(inicio.value); 
        let f = Number(fim.value); 
        let p = Number(passo.value); 

        res.innerHTML = ` contando &#8635; <br>`;

        if (p <= 0 ) {
            window.alert('Impossível contar, consideramos o passo 1'); 
            p = 1; 
        }
        if (i < f ) { // progresso
            for(let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c}`; 
            }
        } else { // regresso
            for (let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c}`; 
            }
        }
    }
}