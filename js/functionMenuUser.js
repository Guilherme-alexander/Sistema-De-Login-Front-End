const ul = document.querySelector('.menu-list');

let home = document.querySelector('.componente-home');
let perfil = document.querySelector('.componete-perfil');
let info = document.querySelector('.componete-info');


ul.addEventListener('click',(event)=>{
    const clickedElement = event.target.id;
    
    if(clickedElement == 'home'){
        home.classList.remove('hidden')
        perfil.classList.add('hidden')
        //info.classList.add('hidden')

    }else if(clickedElement == 'perfil'){
        home.classList.add('hidden')
        perfil.classList.remove('hidden')
        //info.classList.add('hidden')

    }else if(clickedElement == 'image'){
        home.classList.add('hidden')
        perfil.classList.remove('hidden')
        //info.classList.add('hidden')
    }
})