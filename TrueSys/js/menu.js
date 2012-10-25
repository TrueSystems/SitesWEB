<!-- Esse JS é utilizado para gerenciar o Menu geral do site Gerenciando
<!-- Cor e Visibilidade do menu... Roda no Internet Explorer 4 ou Superior
<!-- e Netscape 6.2 ou Superior.
<!-- Essa função foi criada utilizando o Dreamweaver Ultradev 4.0
function MM_reloadPage(init) 
{  
  if (init==true) with (navigator) 
  	{
  	if ((appName=="Netscape")&&(parseInt(appVersion)==4)) 
		{
    	document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; 
		}
	}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
// -->
<!--
function MM_findObj(n, d) 
{
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) 
  {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
  }
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_showHideLayers() 
{
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  	if ((obj=MM_findObj(args[i]))!=null) 
	{ 
		v=args[i+2];
    	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    	obj.visibility=v; 
	}
}
function aplicar(obj) 
	{
		obj.style.backgroundColor = '#0099FF';
	}
function limpar(obj) 
	{
		obj.style.backgroundColor = '#99CCFF';
	}
-->