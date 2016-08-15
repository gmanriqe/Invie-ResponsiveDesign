
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

// addEventListener('que queremos escuchar','que queremos hacer');
$burguerButton.addEventListener('touchstart', function(){
	$menu.classList.toggle('active');
})
