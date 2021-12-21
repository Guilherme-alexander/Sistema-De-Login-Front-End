	var x = document.getElementById("login");
	var y = document.getElementById("register");
	var z = document.getElementById("btn");
	var btn1 = document.querySelector('.btn1'); 
	var btn2 = document.querySelector('.btn2');

	function register(){
		x.style.left ="-400px";
		y.style.left ="50px";
		z.style.left ="110px";
		btn1.classList.remove('color');
		btn2.classList.add('color');
	}

	function login(){
		x.style.left ="50px";
		y.style.left ="450px";
		z.style.left ="0px";
		btn1.classList.add('color');
		btn2.classList.remove('color');
	}

	