
function verificar_idade() {
    // input`s numbers 
    let ano = new Date().getFullYear(); 
    let input_idade = window.document.getElementById('idade_input').value; 
    var idade = ano - input_idade; 

    // resposta
    let res = window.document.getElementById('res');

    if (input_idade >= 2021) {
        window.alert('[ERRO] idade incorreta.');
    } else {
        // input radio 
        let sexo = window.document.getElementsByName('genero'); 
        var genero = ''; 
        // create image 
        var img = window.document.createElement('img'); 
        img.setAttribute('id', 'imagem'); 
        // condições + imagens
        if (sexo[0].checked) {
            genero = 'homem'; 
    
           if (idade >= 0 && idade <= 10) {
               // criança 
               img.setAttribute('src', 'imagens_exercicios/bebe_homem.png')
           } else if (idade <= 25) {
               // jovem
               img.setAttribute('src', 'imagens_exercicios/homem_novo.png')
           } else if (idade <= 60) {
               // adulto  
               img.setAttribute('src', 'imagens_exercicios/homem_media.png')
           } else {
               // idoso
               img.setAttribute('src', 'imagens_exercicios/homem_idoso.png')
           }
        } else if (sexo[1].checked) {
            genero = 'mulher'; 

            if (idade >= 0 && idade <= 10) {
                // criança 
                img.setAttribute('src', 'imagens_exercicios/bebe_mulher.png')
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src', 'imagens_exercicios/mulher_nova.png')
            } else if (idade <= 60) {
                // adulto  
                img.setAttribute('src', 'imagens_exercicios/mulher_media.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens_exercicios/mulher_idosa.png')
            }
        }
    }

    res.innerHTML = `você é ${genero} de ${idade} idade. <br><br>`;
    res.appendChild(img);  
}