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
			<div class="extra-btn"><a href="faq.aspx" title="Quanto Custa?">Quanto custa?</a></div>
		</nav>

		<div id="container">
			<section id="about-android">
				<div class="blue-strip">
					<h2 class="title-strip">PWAP Android</h2>
				</div>
				<hgroup>
					<h3 class="notes centered">
					<img src="images/pwapandroid-panfleto.gif" alt="PWAP Android - Automação da Força de Vendas - 
					Rápido: Clientes, produtos, histórico, tudo é mais rápido pois o PWAP Android não precisa de internet para montar seus pedidos. 
					Bonito: Nova interface, mais colorida, mais fácil de usar, utilizando todos os recursos que o Android oferece. 
					Fácil: Pedidos com dezenas, centenas de itens? A seleção de produtos funciona de forma muito mais inteligente, pesquisas por grupo, família, compra em lote e mais.">
					<br>
					Panfleto do PWAP
					</h3>
					<h3 class="normal-text">O PWAP pode ser integrado de forma fácil e rápida via PwapLink (conjunto de web services fornecido sob forma de SDK) com outras aplicações da sua empresa, tais como: ERP, CRM e outras bases de dados.<br><br/>
					Com esta facilidade, o PWAP pode trabalhar diretamente com os cadastros da sua empresa (cadastro de clientes, produtos, condições comerciais e pedidos) de forma online, evitando intervenções manuais e duplicação de dados.</h3>
					<h2 class="blue-text">Telas do PWAP Android</h2>

					<figure>
						<img src="images/1.jpg">
						<figcaption>
							Tela de inicialização do PWAP, onde é possível verificar no - campo superior esquerdo - a versão instalada, nesse caso, versão 1.0.2.2.
						</figcaption>
					</figure>

					<figure>
						<img src="images/2.jpg">
						<figcaption>
							Tela de login na aplicação. Aqui devem ser inseridas as informações de usuário e senha, bem como, o ambiente que identifica a empresa.
						</figcaption>
					</figure>

					<figure>
						<img src="images/3.jpg">
						<figcaption>
							Tela de mensagem. É possível definir mensagens que serão exibidas aos vendedores assim que fizerem login no PWAP Android.
						</figcaption>
					</figure>

					<figure>
						<img src="images/4.jpg">
						<figcaption>
							Menu da aplicação. Nessa tela estão todas as opções do PWAP Android, é você quem decide quais serão implementadas. Para incluirmos um pedido devemos escolher o menu "Venda".
						</figcaption>
					</figure>

					<figure>
						<img src="images/5.jpg">
						<figcaption>
							A primeira tela do pedido contém informações gerais como, seleção de clientes, forma de pagamento, prazo de pagamento, observação do pedido, e mais. Você escolhe quais informações aparecerão nessa tela. 
						</figcaption>
					</figure>

					<figure>
						<img src="images/6.jpg">
						<figcaption>
							Tela de pesquisa de produto. É possível pesquisar por nome, código e até filtrar por grupo e família. Também é possível marcar diferentes produtos ao mesmo tempo.
						</figcaption>
					</figure>

					<figure>
						<img src="images/7.jpg">
						<figcaption>
							Tela de compra de produto. Após selecionar o produto, o vendedor deve incluir a quantidade desejada, e ainda pode dar desconto e bonificação. Existe a opção de replicar a quantidade para todos os produtos selecionados.
						</figcaption>
					</figure>

					<figure>
						<img src="images/8.jpg">
						<figcaption>
							Tela de envio de pedido. Antes de enviar o pedido é possível conferir o resumo dos produtos selecionados. Nessa tela o vendedor pode escolher entre abandonar o pedido, enviar para sua empresa ou guardar para continuar depois.
						</figcaption>
					</figure>
				</hgroup>
			</section>

            <section id="howitworks">
				<div class="blue-strip">
				    <h2 class="title-strip">Como funciona?</h2>
				</div>
				<hgroup>
					<h3 class="normal-text">
					<span class="bold">1)</span> O vendedor acessa o <strong>PWAP Android</strong>, caso ele possua conexão com a internet, o <strong>PWAP</strong> verifica se existe alguma base de dados mais recente para realizar o download.<br>
					<span class="bold">2)</span> A partir daí é possível listar clientes, produtos, selecionar formas e prazos de pagamento, enfim, montar o pedido e enviar.<br>
					<span class="bold">3)</span> Se houver conexão com a internet, o pedido é enviado para o <strong>PWAPLink</strong> que valida as informações do pedido e o inclui no banco de dados de seu sistema. Caso contrário, o pedido ficará armazenado no banco de dados local aguardando o acesso à internet para então ser encaminhado à sua empresa.</h3>
					<br>
					
					<aside class="centered">
						<img src="images/howItWorksAndroid.gif" alt="Como funciona o PWAP Android">
					</aside>
					
					<h2 class="blue-text">Mas quem é esse tal de PwapLink?</h2>
					<h3 class="normal-text">
					O PwapLink é um conjunto de web services que deve ser programado para realizar a comunicação entre o PWAP Android e o sistema da sua empresa/banco de dados. Essa programação pode ser realizada pelo próprio cliente <span class="notes">*</span>, ou pela Equipe da True Systems. <span class="notes">**</span></h3>
					
					<h2 class="blue-text">E o Gerador de Bases Móveis?</h2>
					<h3 class="normal-text">
					A versão Android do PWAP depende de um pequeno banco de dados que ficará armazenado no dispositivo Android, permitindo assim a montagem de pedidos offline (sem acesso à internet). 
					Para tornar isso possível, é necessário a presença do Gerador de Bases móveis, um programa desenvolvido pela Equipe da True Systems <span class="notes">**</span> responsável por obter todas as informações necessárias para a montagem do pedido.</h3>
					
					<h2 class="blue-text">Instalação:</h2>
					<h3 class="normal-text">O PwapLink e o Gerador de Bases Móveis ficam instalados em um servidor na empresa do cliente. Este servidor deve possuir Windows Server 2003 ou superior, IIS (Internet Information Service) e .NET Framework 3.5 SP1.</h3>
				
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