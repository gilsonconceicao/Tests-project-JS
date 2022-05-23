// menu js 

document.getElementById('btnMenuMobile')
    .addEventListener('click', function(e) {
        e.preventDefault(); 
        // Conteiner
        const conteinerMenu = document.getElementById('menuVersionResponse'); 

        //Button 
        const btnMenuClick = document.getElementById('btnMenuMobile'); 

        if (conteinerMenu.style.display == 'block') {
            conteinerMenu.style.display = 'none'; 
            btnMenuClick.innerHTML = '&#9776;'
        } else {
            conteinerMenu.style.display = 'block'; 
            btnMenuClick.innerHTML = 'X'
        }
    })

