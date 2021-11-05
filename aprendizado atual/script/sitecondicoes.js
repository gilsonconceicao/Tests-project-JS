// linguagens de programação de acordo com o nome. 

function linguagens_name() {
    var input_language = window.document.getElementById('linguagen_input'); 
    var language = input_language.value; 
    
    var res_language = window.document.getElementById('res_language'); 
    res_language.innerHTML = '&#10004; - ' + language; 

    switch (language) {
        case 'javascript':
            res_language.innerHTML += `<br> <br> <strong> JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica. </strong> <br>
            
            <br> <img src="imagens/imagem javascript.png" alt="imagem javascript">`; 
            break;

        case 'java': 
            res_language.innerHTML += `<br> <br> <strong>Java é uma linguagem de programação orientada a objetos.</strong> <br> 

            <br> <img src="imagens/imagem java.png" alt="imagem java"> `;
            break; 
        
        case 'python': 
            res_language.innerHTML += `<br> <br> <strong>Python é uma linguagem de programação de alto nível, e imperativa. </strong> <br>

            <br> <img src="imagens/imagem python.jpg" alt="linguagem python">`
            break; 

        case `php`: 
            res_language.innerHTML += `<br> <br> <strong>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações. </strong> <br>

            <br> <img src="imagens/imagem php.jpg" alt="imagem php">`
            break; 

        case 'C': 
            res_language.innerHTML += `<br> <br> <strong>C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa. </strong> <br>

            <br><img src="imagens/imagem C.png" alt="imagem linguagem C ">` 
        default:
            break;
    }
}

// limite de idade para votar

function idade_votos() {
    var idade_input = window.document.getElementById('idade_input'); 
    var idade = idade_input.value; 
    var res_idade = window.document.getElementById('res_idade'); 
    res_idade.innerHTML = `&#10004; - A sua idade é: ${idade} anos.`; 

    if (idade < 16) {
        res_idade.innerHTML += `<br> você <strong>não</strong> pode <strong>votar</strong>`; 
    } 
    else if (idade <= 18 || idade > 65) {
        res_idade.innerHTML += `<br> o seu voto é <strong>opcional</strong>.`;
    }
    else {
        res_idade.innerHTML += `<br> o seu voto é <strong>obrigatório</strong>.`; 
    }
}
// período de acordo com o horário. 

function horario_periodo() {
    var input_hora = window.document.getElementById('input_hora'); 
    var hora = input_hora.value; 
    var res_hora = window.document.getElementById('res_hora');
    res_hora.innerHTML = `&#10004; O horário escolhido foi: `; 

    if (hora >= 4 && hora <=12) {
        res_hora.innerHTML += `<br> Bom dia!`; 
    }
    else if (hora > 12 && hora < 18) {
        res_hora.innerHTML += `<br> Boa tarde!`; 
    }
    else if (hora > 18 && hora < 23){
        res_hora.innerHTML += `<br> Boa noite!`;
    } 
    else {
        res_hora.innerHTML += `<br> Boa madrugada!`;
    }
}

// estado abreviados

function estado_abreviados() {
    var estado_input = window.document.getElementById('estado_input'); 
    var estado = estado_input.value; 
    var res_estado = window.document.getElementById('res_estado'); 
    res_estado.innerHTML = `&#10004; - O Estado escolhido foi: ${estado}`; 

    switch (estado) {
        case 'SP':
            res_estado.innerHTML += `<br> São Paulo.`
            break;

        case 'MG':
            res_estado.innerHTML += `<br> Minas Gerais.`
            break; 

        case 'AM':
            res_estado.innerHTML += `<br> Amazonas.`
            break; 

        case 'BA':
            res_estado.innerHTML += `<br> Bahia.`
            break; 
        default:
            res_estado.innerHTML += `<br> [erro] estado inválido. As nossas opções são: SP, AM, BA e MG.`
            break;
    }
}

// Calculadora da pagina multiplicar e dividir 

function calcular_vezes() {
    var vezesN1 = Number(number_vezes01.value); 
    var vezesN2 = Number(number_vezes02.value); 
    var valor_vezes = vezesN1 * vezesN2; 
    var res_vezes = window.document.getElementById('valor_vezes'); 
    res_vezes.innerHTML = `&#10004; - ${vezesN1} x ${vezesN2} = ${valor_vezes}`
}

function calcular_dividir() {
    var dividirN1 = Number(number_dividir01.value); 
    var dividirN2 = Number(number_dividir02.value); 
    var valor_divisao = dividirN1 / dividirN2; 
    var res_dividir = window.document.getElementById('valor_dividir');
    
    res_dividir.innerHTML = `${dividirN1} / ${dividirN2} = ${valor_divisao}`; 
}