<!-- Esta função testa a Resolução do usuario e Aplica <style> dependendo
<!-- da Resolução utilizada. ( Roda no Cliente )

if(navigator.appName == 'Microsoft Pocket Internet Explorer')
	{
	document.write('<link rel="stylesheet" type="text/css" href="../css/true800.css">');
	}

if (screen.height >= 768 && screen.width >= 1024) 
{
document.write('<link rel="stylesheet" type="text/css" href="../css/true1024.css">');
}
else 
{
	if (screen.height == 600 && screen.width == 800) 
	{
	document.write('<link rel="stylesheet" type="text/css" href="../css/true800.css">');
	}
	else 
	{
	document.write('<link rel="stylesheet" type="text/css" href="../css/true800.css">');
	}
}
// -->