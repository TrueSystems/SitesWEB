<%@ Page %>
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
			<div class="extra-btn"><a href="#" title="Quanto Custa?">Quanto custa?</a></div>
		</nav>

		<div id="container">
			<section id="howmuch">
				<div class="blue-strip">
					<h2 class="title-strip">Quanto custa?</h2>
				</div>
				<div class="plan">
					<h3>Online</h3>
					<div class="planrate">
						<p class="preco">de R$75,00/mês por R$69,99/mês</p>
					</div>					
					<ul class="liststyle">
						<li>Informações sempre atualizadas</li>
						<li>Funciona em qualquer dispositivo<span class="notes">**</span></li>
						<li>Interface simples e funcional</li>
					</ul>
					<div class="order">
						<a href="suporte01.aspx">Comprar</a>
					</div>
				</div>

				<div class="plan">
					<h3>Android</h3>
					<div class="planrate">
					    <p class="preco">de R$75,00/mês por R$69,99/mês</p>
					</div>					
					<ul class="liststyle">
						<li>Funciona sem internet<span class="notes">***</span></li>
						<li>Seleção por grupo e família</li>
						<li>Compra em lote</li>
					</ul>
					<div class="order">
						<a href="suporte01.aspx">Comprar</a>
					</div>
				</div>
				<div id="howmuch-notes">
					<h6 class="notes">*Esse é o valor mensal de cada usuário (licença de utilização), entretanto, o PWAP demanda uma integração com seu sistema de ERP e este tem um preço variável, por favor, entre em <a href="suporte01.aspx#contact">contato</a> para saber mais.
					<h6 class="notes">**Qualquer dispositivo com acesso à internet e um navegador.
					<h6 class="notes">***Todas as operações de consulta e montagem do pedido funcionam offline, apenas a atualização de dados locais e envio de pedidos necessitam de internet. Entretanto, você pode montar seus pedidos e eles serão armazenados automaticamente, assim que houver internet, serão enviados instantaneamente.</h6>
				</div>
			</section>


			<section id="faq">
				<div class="blue-strip">
					<h2 class="title-strip">Perguntas Frequentes (FAQ)</h2>
				</div>
				<hgroup>
					<ul class="blue-text">
						<li><a href="#q1">Quanto tempo leva para implantar?</a></li>
						<li><a href="#q2">Quanto custa a integração do PWAP com meu ERP?</a></li>
						<li><a href="#q3">Em quais equipamentos o PWAP funciona?</a></li>
						<li><a href="#q4">O PWAP se integra com o meu sistema?</a></li>
						<li><a href="#q5">Qual a infraestrutura mínima necessária?</a></li>
						<li><a href="#q6">Posso cancelar o PWAP a qualquer momento?</a></li>
						<li><a href="#q7">Quais as diferenças entre as versões Online e Android?</a></li>
						<li><a href="#q8">Há quanto tempo existe o PWAP?</a></li>
						<li><a href="#q9">Como faço para ver o PWAP funcionando?</a></li>
						<li><a href="#q10">Quem usa o PWAP?</a></li>
						<li><a href="#q11">Posso pagar o PWAP com cartão BNDES?</a></li>
					</ul>

					<h3 class="blue-text"><a name="q1">Quanto tempo leva para implantar?</a></h3>
					<p>Todo o processo de integração e instalação leva 20 dias.</p>
					<hr>
					<h3 class="blue-text"><a name="q2">Quanto custa a integração do PWAP com meu ERP?</a></h3>
					<p>A integração com seu ERP (Sistema de Faturamento) tem um custo que varia de acordo com seu sistema. Entre em <a href="suporte01.aspx#contact">contato</a> com a gente informando 
					o nome do sistema e o banco de dados que ele utiliza, se você souber. Nós respondemos rapidinho e ainda parcelamos sem juros para ajudá-lo a ter o PWAP em sua empresa.</p>
					<hr>
					<h3 class="blue-text"><a name="q3">Em quais equipamentos o PWAP funciona?</a></h3>
					<p>O PWAP funciona em qualquer dispositivo com acesso à internet e com um navegador. 
						No caso da versão Android, ela funciona em qualquer aparelho (smartphones e tablets) cujo sistema seja Android 2.1 ou superior.</p>
					<hr>
					<h3 class="blue-text"><a name="q4">O PWAP se integra com o meu sistema?</a></h3>
					<p>Atualmente o PWAP se integra com qualquer sistema de ERP. Caso ainda não possua, entre em contato que podemos 
						ajudá-lo a escolher um.</p>
					<hr>
					<h3 class="blue-text"><a name="q5">Qual a infraestrutura mínima necessária?</a></h3>
					<p>Para realizar a comunicação com seu sistema, o <a href="funcionamento01.aspx">PwapLink</a> deve ficar instalado em um servidor com Windows Server, localizado em sua empresa e conectado à internet.</p>
					<hr>
					<h3 class="blue-text"><a name="q6">Posso cancelar o PWAP a qualquer momento?</a></h3>
					<p>Sim. Para cancelar o PWAP basta entrar em contato com a True Systems e pedir o cancelamento do serviço ou até mesmo suspensão por um período determinado. <strong>Não</strong> há qualquer multa de rescisão de contrato.</p>
					<hr>
					<h3 class="blue-text"><a name="q7">Quais as diferenças entre as versões Online e Android?</a></h3>
					<p><strong>PWAP ONLINE</strong><br>
					Um dos benefícios do PWAP Online é que você pode utilizá-lo em qualquer dispositivo com acesso à internet e um navegador, ou seja, não é necessário possuir um smartphone de última geração para incluir seus pedidos.
					Também é recomendado quando ocorrem diversas alterações em seu banco de dados em um curto intervalo de tempo, pois essa versão busca os dados de forma online diretamente em seu sistema, por isso, depende de acesso contínuo à internet.
					<br><br>
					<strong>PWAP ANDROID</strong><br>
					Se você dispõe de um aparelho Android, recomendamos a utilização do PWAP Android.
					Além de não depender da internet para realizar consultas e montar seus pedidos, a seleção de produtos ocorre de forma muito mais rápida. Portanto, se você trabalha com mais de 10 itens por pedido, é aconselhável o uso do PWAP Android, isso porque a busca acontece offline, diretamente no banco de dados presente no celular.<br>
					Com ele também é possível utilizar a leitura de código de barras, pesquisa em lote e armazenar pedidos para enviar depois.</p>
					<hr>
					<h3 class="blue-text"><a name="q8">Há quanto tempo existe o PWAP?</a></h3>
					<p>O PWAP foi lançado em 2004 e mantém seu funcionamento ininterrumpido até hoje, sempre se adequando as novas tecnologias.</p>
					<hr>
					<h3 class="blue-text"><a name="q9">Como faço para ver o PWAP funcionando?</a></h3>
					<p>Podemos agendar uma demonstração do PWAP através do <a href="http://www.webex.com.br">Webex</a>, assim você pode conferir todo o funcionamento da aplicação.</p>
					<hr>
					<h3 class="blue-text"><a name="q10">Quem usa o PWAP?</a></h3>
					<p>Nossos clientes que utilizam o PWAP incluem: Guaracamp, Ecopaper (Melhoramentos Papéis), Carta Fabril, entre outros.</p>
					<hr>
					<h3 class="blue-text"><a name="q11">Posso pagar o PWAP com cartão BNDES?</a></h3>
					<p>Sim.</p>
				</hgroup>
			</section>
		</div> <!-- END of div CONTAINER -->

		<footer>
			<div class="footer-links">
				<ul>
					<li><a href="#" title="Quanto Custa?">Quanto custa?</a></li>
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