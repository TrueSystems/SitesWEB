<%@ Page %>
<!doctype html>
<html lang="pt-br">
<head>
<meta name="author" content="True Systems">
<meta charset="utf-8">
<title>PWAP - Automa��o da for�a de vendas</title>

<link rel="stylesheet" type="text/css" href="css/style.min.css">
<link href='http://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>

<script type="text/javascript">
    var $buoop = { vs: { i: 8, f: 3.5, o: 10.6, s: 3.2, n: 9} }
    $buoop.ol = window.onload;
    window.onload = function() {
        try { if ($buoop.ol) $buoop.ol(); } catch (e) { }
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", "http://browser-update.org/update.js");
        document.body.appendChild(e);
    } 
</script>

<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
	<div id="wrapper">
		<header>
			<div id="logo">
				<a class="logo" href="#"><h1>PWAP - Automa��o da for�a de vendas</h1></a>
			</div>
			<div id="splash">
				<img src="images/balao.gif" class="splash" alt="D� adeus aos erros e aos pedidos em papel">
				<h2 class="splash">D� adeus aos erros e <br> &nbsp;&nbsp;&nbsp; aos pedidos em papel</h2>
			</div>
		</header>
		
		<nav role="navigation">
			<ul id="nav">
				<li class="nav"><a class="nav" href="#" title="P�gina Inicial">Home</a></li>
				<li class="nav"><a href="faq.aspx#faq" title="Perguntas Frequentes">Perguntas Frequentes</a></li>
				<li class="nav"><a class="nav" href="vantagens.aspx" title="Vantagens">Vantagens</a></li>
				<li class="nav"><a class="nav" href="casosucesso.aspx" title="Casos de Sucesso">Cases</a></li>
				<li class="nav"><a class="nav" href="suporte01.aspx" title="Fale Conosco">Fale Conosco</a></li>
			</ul>
			<div class="extra-btn"><a href="faq.aspx" title="Quanto Custa?">Quanto custa?</a></div>
		</nav>

		<div id="container">
		<br>
		<section id="presentation">
			<img src="images/android-screen.png" class="slide-frame">
			<img src="images/1.jpg" alt="Telas do PWAP Android" class="slide-screen" id="slide-screen">
			<h3 class="top-title">O que �?</h3>
			<h2 class="presentation-text">O PWAP � um servi�o que permite, de forma r�pida, eficiente e segura, automatizar o envio de pedidos da sua for�a de vendas.</h2>
			<h4><a href="pwapandroid.aspx"><br>Quero saber mais sobre o PWAP</a></h4>
		</section>
		
		<section id="modules">
			<h2 class="blue-subtitle">O PWAP � composto por dois m�dulos:</h3>
			<div id="cel">
				<img src="images/cel.gif" />						
			</div>
			<div>
				<h3>� Aplica��o do Vendedor.</h3>
				<h4>Atrav�s do celular (ou qualquer outro dispositivo com acesso � internet), o vendedor pode dar entrada nos pedidos de seus clientes e envi�-los para sua empresa, pr�-cadastrar novos clientes, consultar a situa��o dos pedidos, produ��o, roteiro e mais.<span class="notes">*</span></h4>
			</div>
			<br>
			<div id="pc">
				<img src="images/pc.gif" />						
			</div>
			<div>
				<h3>� Administra��o de Pedidos.</h3>
				<h4>Acessado pela internet, � poss�vel gerenciar os pedidos e informa��es da base de dados criada para sua empresa.</h4>
			</div>

			<div>
				<h6 class="notes">*Todas as funcionalidades depender�o da exist�ncia das mesmas no seu sistema de ERP.<br>
				<span class="bold">Exemplo: </span>A funcionalidade roteiro s� poder� ser ativada no PWAP caso a mesma j� exista em seu ERP.</h6>
			</div>
		</section>

		<div class="divisao"></div>

		<section id="columns">
			<h2 class="blue-subtitle">Duas op��es de utiliza��o:</h3>
				
			<div id="online">
				<h2 class="columns-title">Online</h2>
				<h3 class="columns-text">A inclus�o de pedidos � feita diretamente em sua base de dados, agilizando o processo pois n�o necessita sincroniza��o.<br><br>
				Todas as informa��es consultadas pelo vendedor: pedidos, cadastros, estoque, pre�o, estar�o atualizadas pois o PWAP acessa seu sistema de forma online, evitando a utiliza��o de dados incorretos.<br>E nenhuma informa��o fica salva no aparelho.
				<a class="bold link-details" href="funcionamento01.aspx"> Leia mais</a>
				</h3>
				<br>
				<a class="btn-more-details" href="suporte01.aspx" title="Solicite mais informa��es">Solicite mais informa��es</a>
			</div>
				
			<div id="embedded">
				<h2 class="columns-title">Android</h2>
				<img class="android-image"src="images/android.png" alt="Android" />
				<h3 class="columns-text">Em localidades onde n�o h� internet m�vel, � poss�vel utilizar a vers�o Android do PWAP.<br>
				Essa vers�o funciona apenas em aparelhos com Android (a partir do 2.1).<br><br>
				Nessa vers�o, o PWAP � instalado no aparelho e todas as informa��es s�o salvas no mesmo. A atualiza��o dos dados locais e envio dos pedidos se d� quando o mesmo � conectado � internet.
				<a class="bold link-details" href="pwapandroid.aspx"> Leia mais</a>
				</h3>
				<br>
				<a class="btn-more-details" href="suporte01.aspx" title="Solicite mais informa��es">Solicite mais informa��es</a>
			</div>
		</section>
		</div> <!-- END of div CONTAINER -->

		<footer>
			<div class="footer-links">
				<ul>
					<li><a href="faq.aspx" title="Quanto Custa?">Quanto custa?</a></li>
					<li><a href="faq.aspx#faq" title="Perguntas Frequentes">Perguntas frequentes</a></li>
					<li><a href="vantagens.aspx" title="Vantagens">Vantagens</a></li>
					<li><a href="casosucesso.aspx" title="Casos de Sucesso">Cases</a></li>
					<li><a href="pwapandroid.aspx">Detalhes do PWAP Android</a></li>
					<li><a href="suporte01.aspx" title="Fale Conosco">Fale conosco</a></li>
				</ul>
			</div>

			<div class="other-prod">
				<h3 id="footer-title">Conhe�a nossos outros produtos:</h2>
				<div id="white-box">
					<ul class="footer-logo">
						<li><a href="http://www.truesys.com/onFlux.aspx"><img class="logo-onflux" src="images/onflux.gif" /></a></li>
						<li><a href="http://www.truesys.com/onFluxRadar.aspx"><img class="logo-radar" src="images/onfluxradar.gif" /></a></li>
					</ul>
				</div>
			</div>
		</footer>

	</div>

	<script type="text/javascript" src="js/script.min.js"></script>
	
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-10003745-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>