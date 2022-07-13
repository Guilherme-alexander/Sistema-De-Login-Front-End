    let getDadosLocalStorageName = JSON.parse(localStorage.getItem("userLoginName"))
    let getDadosLocalStorageEmail = JSON.parse(localStorage.getItem("userLoginEmail"))
    let getDadosLocalStoragePassword = JSON.parse(localStorage.getItem("userLoginPassword"))

    //console.log(getDadosLocalStorage)

    //Log-in Button
	let ButtonLogar =  document.querySelector('.logar-btn')

    //Form Login
    let formLogin = document.querySelector('#login')

	formLogin.addEventListener('submit',(e)=>{
		e.preventDefault();
		LogarUser();
	});

//function validate login Name and password
    function LogarUser(){
        let nameUser = document.querySelector('.login').value;
        let passUser = document.querySelector('.password').value;

        // validate login input
        if(nameUser == getDadosLocalStorageName.name && passUser == getDadosLocalStoragePassword.password){
            //Redirect Log-in User
            window.open("userLogado.html","_self");

            const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

            localStorage.setItem('tokenID',token);

        }else{
            //Active Popup Error login
            let popup = document.querySelector('.popup');
                popup.style.display = 'flex';

            //Disable  Popup
            let ButtonExitPopup = document.querySelector('.exit_popup_error');

                ButtonExitPopup.addEventListener('click',()=>{
                    popup.style.display = 'none';
                })
        }
        
        
    }