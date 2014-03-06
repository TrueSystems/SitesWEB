<!-- Esta função testa a Resolução do usuario e Aplica <body> dependendo
<!-- da Resolução utilizada. ( Roda no Cliente )
if (screen.height >= 768 && screen.width >= 1024) 
{
	document.write('<body background="../img/jpg/backmulher1024.jpg" bgproperties="fixed" leftmargin="0" topmargin="0">');
}
else 
{
	if (screen.height == 600 && screen.width == 800) 
	{
		document.write('<body background="../img/jpg/backmulher800.jpg" bgproperties="fixed" leftmargin="0" topmargin="0">');
	}
	else 
	{
		document.write('<body bgcolor = "#FFFFFF" leftmargin="0" topmargin="0">');
	}
}
// -->