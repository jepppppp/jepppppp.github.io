// window.addEventListener('load',() => {
// 	const preload = document.querySelector('.preload');
// 	preload.classList.add('preload-finish');	
// });

window.onload = function(){

	document.getElementById('loader').className = 'preload active';
	setTimeout(function(){
		document.getElementById('loader').style.display='none'
	},3000)
}