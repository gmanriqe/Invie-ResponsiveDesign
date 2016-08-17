var consulta = window.matchMedia('(max-width:500px)');
consulta.addListener(mediaQuery); //se ejecutará en el momento que haga resize a la pantalla

var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

function toggleMenu(){
	$menu.classList.toggle('active');
};

function mediaQuery() {
	if(consulta.matches) {
		console.log('se cumplio la condicion');
		$burguerButton.addEventListener('touchstart',toggleMenu);

	}else {
		console.log('NO! se cumplio la condicion');
		$burguerButton.removeEventListener('touchstart',toggleMenu);

	}
}
mediaQuery();
