<%@LANGUAGE="JAVASCRIPT" CODEPAGE="1252"%>
<!doctype html>
<html lang="pt-br">
<head>
<meta name="author" content="True Systems">
<meta charset="utf-8">
<title>PWAP - Automação da força de vendas</title>

<link rel="stylesheet" type="text/css" href="css/style.min.css">
<link href='http://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>
<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
	<div id="wrapper">

		<header>
			<div id="logo">
				<a class="logo" href="default.aspx"><h1>PWAP - Automação da força de vendas</h1></a>
			</div>
			<div id="splash">
				<img src="images/balao.gif" class="splash" alt="Dê adeus aos erros e aos pedidos em papel">
				<h2 class="splash">Dê adeus aos erros e <br> &nbsp;&nbsp;&nbsp; aos pedidos em papel</h2>
			</div>
		</header>
		
		<nav role="navigation">
			<ul id="nav">
				<li class="nav"><a class="nav" href="default.aspx" title="Página Inicial">Home</a></li>
				<li class="nav"><a href="faq.aspx#faq" title="Perguntas Frequentes">Perguntas Frequentes</a></li>
				<li class="nav"><a class="nav" href="vantagens.aspx" title="Vantagens">Vantagens</a></li>
				<li class="nav"><a class="nav" href="casosucesso.aspx" title="Casos de Sucesso">Cases</a></li>
				<li class="nav"><a class="nav" href="suporte01.aspx" title="Fale Conosco">Fale Conosco</a></li>
			</ul>
			<div class="extra-btn"><a href="faq.aspx" title="Quanto Custa?">Quanto custa?</a></div>
		</nav>

		<div id="container">
			<section id="howitworks">
				<div class="blue-strip">
					<h2 class="title-strip">Como funciona?</h2>
				</div>
				<hgroup>
					<h3 class="normal-text">O PWAP pode ser integrado de forma fácil e rápida via PwapLink (conjunto de web services fornecido sob forma de SDK) com outras aplicações da sua empresa, tais como: ERP, CRM e outras bases de dados.<br><br/>
					Com esta facilidade, o PWAP pode trabalhar diretamente com os cadastros da sua empresa (cadastro de clientes, produtos, condições comerciais e pedidos) de forma online, evitando intervenções manuais e duplicação de dados.</h3>
					<h2 class="blue-text">Ciclo de Vida</h2>
					<h3 class="normal-text">
					<span class="bold">1)</span> Uma requisição ao <span class="bold">PWAP</span> é feita. Por exemplo, a seleção de uma forma de pagamento.<br>
					<span class="bold">2)</span> O <span class="bold">PWAP</span> faz uma chamada ao web service <span class="bold">PwapLink</span> pela internet (HTTP) que processa a requisição.<br>
					<span class="bold">3)</span> O <span class="bold">PwapLink</span> se conecta ao banco de dados ou sistema da sua empresa, executa a operação e devolve os dados ao <span class="bold">PWAP</span>.</h3>
					<br>
					<aside class="centered">
						<img src="images/howitworks.gif" alt="Como funciona">
					</aside>
					<h2 class="blue-text">Mas quem é esse tal de PwapLink?</h2>
					<h3 class="normal-text">
					Como já dito, o PwapLink é um conjunto de web services que deve ser programado para realizar a comunicação entre o PWAP e o sistema da sua empresa/banco de dados. Essa programação pode ser realizada pelo próprio cliente <span class="notes">*</span>, ou pela Equipe da True Systems. <span class="notes">**</span></h3>
					
					<h2 class="blue-text">Instalação:</h2>
					<h3 class="normal-text">O PwapLink fica instalado em um servidor na empresa do cliente. Este servidor deve possuir Windows Server 2003 ou superior, IIS (Internet Information Service) e .NET Framework 3.5 SP1.</h3>
				
					<h6 class="notes">* Para programar o PwapLink é necessário conhecimento na plataforma .NET, especialmente a linguagem VB.NET, além de conhecimentos de banco de dados, que variam de acordo com a base que sua empresa utiliza.<br><br>
					** A programação realizada pela True Systems está inclusa no valor de implantação do PWAP.</h6>
				</hgroup>
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
				<h3 id="footer-title">Conheça nossos outros produtos:</h2>
				<div id="white-box">
					<ul class="footer-logo">
						<li><a href="http://www.truesys.com/onFlux.aspx"><img class="logo-onflux" src="images/onflux.gif" /></a></li>
						<li><a href="http://www.truesys.com/onFluxRadar.aspx"><img class="logo-radar" src="images/onfluxradar.gif" /></a></li>
					</ul>
				</div>
			</div>
		</footer>
	</div>

</body>
</html>