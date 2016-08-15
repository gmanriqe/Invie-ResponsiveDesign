
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

// addEventListener('que queremos escuchar','que queremos hacer');
$burguerButton.addEventListener('touchstart',toggleMenu);

function toggleMenu(){
	$menu.classList.toggle('active');
};