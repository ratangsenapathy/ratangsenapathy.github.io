function toggleMenu(element)
{
	element.classList.toggle('active-hamburger-button');
	document.getElementsByClassName('sidebar pure-menu')[0].classList.toggle('active-menu');
}

function transition(tabName)
{	console.log("Why","why");
	var  element = document.getElementById(tabName);
	console.log(element);
	element.style.left = "0px";
}

function setMainContentWidth()
{
	if(window.innerWidth>768)
	document.getElementsByClassName("main-content")[0].style.width = "" + (window.innerWidth -150) + "px";
}