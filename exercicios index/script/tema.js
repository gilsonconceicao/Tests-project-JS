 

function horario_tema() {
    // horário 
    let hora_input = window.document.getElementById('horario'); 
    let hora = Number(hora_input.value)
    // resposta
    let res = window.document.getElementById('res');
    res.innerHTML = ''; 
    // conteiner cores
    let conteiner = window.document.getElementsByClassName('area_tema')[0]; 
    // create element image 
    let img = document.createElement('img'); 
    img.setAttribute('id', 'foto'); 

    if (hora > 23) {
        window.alert('[ERRO] horário não é válido'); 
    }

    if (hora >= 0 && hora <= 12) {
        res.innerHTML += `São ${hora} horas, bom dia.<br>`; 
        conteiner.style.background = 'dodgerblue'; 
        conteiner.style.color = 'white'; 
        img.setAttribute('src', 'imagens_exercicios/horario_manha.png'); 
    } else if (hora <= 17) {
        res.innerHTML += `São ${hora} horas, boa tarde.<br>`; 
        conteiner.style.background = 'orangered'; 
        conteiner.style.color = 'white'; 
        img.setAttribute('src', 'imagens_exercicios/horario_tarde.png'); 
    } else if (hora <= 23) {
        res.innerHTML += `São ${hora} horas, boa noite.<br>`; 
        conteiner.style.background = '#242424'; 
        conteiner.style.color = 'white'; 
        img.setAttribute('src', 'imagens_exercicios/horario_noite.png')
    }

    res.style.textAlign = 'center'; 
    res.appendChild(img); 
}