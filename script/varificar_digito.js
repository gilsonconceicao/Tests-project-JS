
// verificar o valor qur foi digitado e contar 

function verificar_digito() {
    // input:number
    let n_opcoes = window.document.getElementById('n_digito').value; 
    let opcoes = 0; 

    // resposta 
    let res = window.document.getElementById('res_digito'); 

    let valor = 1; 
    while (valor <= n_opcoes) {
        opcoes += ` ${valor}`; 
        valor++
    }

    res.innerHTML = opcoes; 
}