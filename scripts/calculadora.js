// calculando valores de multiplicação

function multiplicar() {
    var vezesN1 = Number(input_vezesN1.value);
    var vezesN2 = Number(input_vezesN2.value);
    var valor_vezes = vezesN1 * vezesN2;
    var res_vezes = window.document.getElementById('res_multiplica')

    res_vezes.innerHTML = `${vezesN1} X ${vezesN2} = ${valor_vezes}`
}

function dividir() {
    var dividirN1 = Number(input_dividirN1.value);
    var dividirN2 = Number(input_dividirN2.value);
    var valor_divisao = dividirN1 / dividirN2;
    var res_divisao = window.document.getElementById('res_dividir')
    
    res_divisao.innerHTML = `${dividirN1} / ${dividirN2} = ${valor_divisao}`
}