//*******************************************************************************************
function page_load()
{
	// Caso esteja fazendo reload da página
	var oObj = document.getElementById("txtQtd");
	if (oObj != null) 
	{
//		document.all.txtQtdAux.value = oObj.value;
//		CalcularValorTotal(oObj.value)
	}
}

//***********************************************************************
function botAnt01_Click()
{
	location.href = "comprar01.aspx";
}

//***********************************************************************
function CalcularValorTotal(Qtd)
{
	var preco = lblValorLicenca.innerText;
	preco = preco.substr(3,preco.length);
	//txtQtd.innerText = Qtd;
	var total = "R$ " + (Qtd * preco);
	var ind = total.indexOf(".");
	if (ind > 0) 
	{ 
		total = total + "00";
		total = total.substr(0, ind + 3); 
	}
	else
	{ 
		total = total + ".00"
	}
	lblValorTotal.innerText = total.replace(".",",");
	document.all.txtQtd.innerText = Qtd;
}

//*******************************************************************************************
function botloginok_onclick()
{
	if (Trim(document.all.txtusuario.value) == "" || Trim(document.all.txtsenha.value) == "")
	{
		alert("Informe seu usuário e senha.");
		return;
	}

	var xmlhttp = new ActiveXObject("Msxml2.XMLHTTP.4.0");
	xmlhttp.open("POST", ("validarloginsite.aspx?u=" + Trim(document.all.txtusuario.value) + "&s=" + Trim(document.all.txtsenha.value)), false);
	xmlhttp.send();

	var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.4.0");
	xmlDoc.loadXML(xmlhttp.responseText);

	var xmlNo = xmlDoc.selectSingleNode("//r");
	var retorno = xmlNo.text;
	xmlNo = xmlDoc.selectSingleNode("//p");
	var pagina = xmlNo.text;
	
	//Se ok
	if (retorno != "")
	{ alert(retorno); }
	else
	{ location.href = pagina; }
}

//***********************************************************************
function validarcaracter(event,code,formatocampo,aceitaespeciais,aceitaacentuacao,altpress,shiftpress)
{
	// Backspace ou TAB ou ENTER
	if (code == 8 || code == 9 || code == 10 || code == 13)
	{
		return;
	}

	if (formatocampo == 'ALFABETICO')
	{
		// Alfabeticos
		if ((code >= 65 & code <= 90)
			||
			(code >= 97 & code <= 122))
		{
			return;
		}
	}

	if (formatocampo == 'ALFANUMERICO')
	{     
		// alfabeticos e numéricos
		if ((code >= 48 & code <= 57)
			||
			(code >= 65 & code <= 90)
			||
			(code >= 97 & code <= 122))
		{
			return;
		}       
	}

	if (formatocampo == 'NUMERICO')
	{
		if (altpress == true || shiftpress == true)
		{
			event.returnValue=false;
			return;         
		}
		// Caracteres numéricos
		if (code >= 48 & code <= 57)
		{
			return;
		}
	}  

	if (formatocampo == 'TELEFONE')
	{
		if (altpress == true || shiftpress == true)
		{
			event.returnValue=false;
			return;         
		}
		// Caracteres numéricos			- Hífen
		if ( (code >= 48 & code <= 57) || code == 45)
		{
			return;
		}
	}  

	if (formatocampo == 'CEP')
	{
		if (altpress == true || shiftpress == true)
		{
			event.returnValue=false;
			return;         
		}
		// Caracteres numéricos			- Hífen
		if ( (code >= 48 & code <= 57) || code == 45)
		{
			return;
		}
	}  		

	if (formatocampo == "VALOR")
	{
		if (altpress == true || shiftpress == true)
		{
			event.returnValue=false;
			return;         
		}
		// Caracteres numéricos, vírgula ou ponto
		if ((code >= 48 & code <= 57) || code == 44)
		{
			return;
		}
	}

	if (formatocampo == "HORA")
	{
		if (altpress == true)
		{
			event.returnValue=false;
			return;         
		}
		// Caracteres numéricos e dois pontos
		if (code >= 48 & code <= 58)
		{
			return;
		}
	}
	

	if (formatocampo == 'EMAIL')
	{
		// ponto, arroba, hifen, sublinhado ou Caracteres numéricos
		if ( code == 46 ||
			 code == 64 ||
			 code == 45 ||
			 code == 95 ||
			(code >= 48 & code <= 57) ||
			(code >= 65 & code <= 90) ||
			(code >= 97 & code <= 122))
		{
			return;
		}
	}

	if (formatocampo == 'WEB')
	{
		// ponto, hífen, sublinhado, dois pontos, barra invertida ou Caracteres numéricos
		if ( code == 46 ||
			 code == 45 ||
			 code == 95 ||
			(code >= 47 & code <= 58) ||
			(code >= 65 & code <= 90) ||
			(code >= 97 & code <= 122))
		{
			return;
		}
	}	

	//Verifica se aceita caracteres acentuados
	if (aceitaacentuacao != true)
	{
	   if ((code >= 192 & code <= 197) ||
		   (code >= 200 & code <= 214) ||
		   (code >= 217 & code <= 221) ||
		   (code >= 224 & code <= 229) ||
		   (code >= 232 & code <= 239) ||
		   (code >= 241 & code <= 246) ||
		   (code >= 249 & code <= 253) ||
		   (code == 255))
	   {
		  event.returnValue=false;
		  return;
	   }
	}

   //Se aceita especiais e o código for de um especial
	if (aceitaespeciais == true & 
		((code >= 32 & code <= 47)
		||
		(code >= 58 & code <= 64)
		||
		(code >= 91 & code <= 96)
		||
		(code >= 123 & code <= 126)
		||
		(code >= 161 & code <= 255))
	)
	{
		return;         
	}         

	event.returnValue=false;
	return;
}

//*******************************************************************************************
function LTrim(String)
{
	var i = 0;
	var j = String.length - 1;

	if (String == null)
		return (false);

	for (i = 0; i < String.length; i++)
	{
		if (String.substr(i, 1) != ' ' &&
		    String.substr(i, 1) != '\t')
			break;
	}

	if (i <= j)
		return (String.substr(i, (j+1)-i));
	else
		return ('');
}

//*******************************************************************************************
function RTrim(String)
{
	var i = 0;
	var j = String.length - 1;

	if (String == null)
		return (false);

	for(j = String.length - 1; j >= 0; j--)
	{
		if (String.substr(j, 1) != ' ' &&
			String.substr(j, 1) != '\t')
		break;
	}

	if (i <= j)
		return (String.substr(i, (j+1)-i));
	else
		return ('');
}

//*******************************************************************************************
function Trim(String)
{
	if (String == null)
		return (false);

	return RTrim(LTrim(String));
}
