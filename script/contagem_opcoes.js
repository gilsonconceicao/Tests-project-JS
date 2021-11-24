
// contagem de acordo com a opção. 

function contar_opcoes() { 
    // input:radio
    let radio_opcoes = window.document.getElementsByName('opcoes'); 
    let opcoes = 0; 

    // resposta
    let res = window.document.getElementById('res_opcoes'); 

    var valor = 1; 
    if (radio_opcoes[0].checked) {
        while (valor <= 10) {
            opcoes += ` ${valor}`; 
            valor++; 
        }
    } else if (radio_opcoes[1].checked) {
        while (valor <= 20) {
            opcoes += ` ${valor}`; 
            valor++; 
        } 
    } else if (radio_opcoes[2].checked) {
        while (valor <= 30) {
            opcoes += ` ${valor}`; 
            valor++; 
        }
    } else if (radio_opcoes[3].checked) {
        while (valor <= 40) {
            opcoes += ` ${valor}`; 
            valor++; 
        }
    }

    res.innerHTML = opcoes
}