var curTab ="home";
var tabList = ["home","education","experience","projects","contact"];
function toggleMenu(element)
{
	element.classList.toggle('active-hamburger-button');
	document.getElementsByClassName('sidebar pure-menu')[0].classList.toggle('active-menu');
}

function transition(tabName)
{	

	if(tabList.indexOf(tabName)>tabList.indexOf(curTab))
	{
		var tabStart = tabList.indexOf(curTab) + 1;
		var tabEnd = tabList.indexOf(tabName) + 1;
		for(var i = tabStart;i<tabEnd;i++)
		{
			var  element = document.getElementById(tabList[i]);
			console.log(element);
			element.style.left = "0px";
			curTab = tabName;
		}
		
	}
	else
	{
		var tabStart = tabList.indexOf(curTab);
		var tabEnd = tabList.indexOf(tabName);
		for(var i = tabStart;i>tabEnd;i--)
		{
			var  element = document.getElementById(tabList[i]);
			console.log(element);
			element.style.left = "100%";
			curTab = tabName;
		}
	}
}

function setMainContentWidth()
{
	if(window.innerWidth>768)
		{
			var content = document.getElementsByClassName("main-content")
			var len = content.length;
			for(var i=0;i<len;i++)
			{
				content[i].style.width = "" + (window.innerWidth -150) + "px";
			}
		}
}