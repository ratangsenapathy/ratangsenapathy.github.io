function toggleMenu(element)
{
	element.classList.toggle('active-hamburger-button');
	document.getElementsByClassName('sidebar pure-menu')[0].classList.toggle('active-menu');
}