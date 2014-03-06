function MenuHoverPai(element,proximo)
{
   element.style.color = 'white';
   element.style.background= "url(../images/MenuAlto.gif)";
   element.style.fontWeight='bold';
   if(navigator.appName == "Netscape")
	{
	    proximo = proximo +1; 
	}
   //element.childNodes[proximo].style.fontWeight = 'normal' ;
   //element.childNodes[proximo].style.color = 'white' ;
  
}
function MenuHover(element)
{
   element.style.color = 'white';
   element.style.fontWeight='bold';
   element.style.background= "url(../images/MenuBaixo.gif)";   
}
function MenuOut(element)
{
    
    element.style.backgroundColor='#6c6c6c';
    element.style.fontWeight='normal'; 
    element.style.color = 'White';  
    element.style.background = '';
}
function fadeOut(id, time) {
	target = document.getElementById(id);
	alpha = 100;
	timer = (time*1000)/50;
	var i = setInterval(
			function() {
				if (alpha <= 0)
					clearInterval(i);
				setAlpha(target, alpha);
				alpha -= 2;
			}, timer);
}

function fadeIn(id, time) {
	target = document.getElementById(id);
	alpha = 0;
	timer = (time*1000)/50;
	var i = setInterval(
			function() {
				if (alpha >= 100)
					clearInterval(i);
				setAlpha(target, alpha);
				alpha += 2;
			}, timer);
}
function setAlpha(target, alpha) {
	target.style.filter = "alpha(opacity="+ alpha +")";
	target.style.opacity = alpha/100;
}
function AplicarEstiloAzul()
{
    location.href='Default.aspx';
}