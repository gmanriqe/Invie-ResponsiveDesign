var consulta = window.matchMedia('(max-width:500px)');
consulta.addListener(mediaQuery); //se ejecutará en el momento que haga resize a la pantalla

var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

function toggleMenu(){
	$menu.classList.toggle('active');
};

function showMenu(){
	$menu.classList.add('active');
};

function hideMenu(){
	$menu.classList.remove('active');
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

// LAZY LOADING

var bLazy = new Blazy ({
	selector : 'img',
	
});

// HAMMERJS - GESTOS TOUCH
$body = document.body;
var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu); //cuando voy hacia la izquierda le quito la clase
gestos.on('swiperight', showMenu); //cuando voy hacia la derecha le añado la clase