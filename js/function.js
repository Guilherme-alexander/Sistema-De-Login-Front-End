//alert('USER:admin PASSWORD:admin')

//form Login
let login_Session_User = document.getElementById("login");
//--------------------------------------------------------

//form register
let register_Session_User = document.getElementById("register");
//--------------------------------------------------------------

//Bullet session login and registratio button
let Button = document.getElementById("btn");
//------------------------------------------

// session login button
let Button_Login = document.querySelector('.Button_Login');
//---------------------------------------------------------

// session Register button
let Button_Register = document.querySelector('.Button_Register');
//---------------------------------------------------------------

//function switch to session register
function register(){
	login_Session_User.style.left ="-400px";
	register_Session_User.style.left ="50px";
	Button.style.left ="110px";
	Button_Login.classList.remove('color');
	Button_Register.classList.add('color');
}//--------------------------------------------------------------

// function switch to login session
function login(){
	login_Session_User.style.left ="50px";
	register_Session_User.style.left ="450px";
	Button.style.left ="0px";
	Button_Login.classList.add('color');
	Button_Register.classList.remove('color');
}//--------------------------------------------------------------

function activeCheckbox(){
	//click span active 

	// $('#btnCheck').on('click', function() {
	// 	$('#checkbox1').get(0).checked = true;
	//   });
	
	//https://www.w3docs.com/tools/code-editor/11854
}	