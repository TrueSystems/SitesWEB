<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Newsletter.aspx.vb" Inherits="Truesys.Newsletter" MasterPageFile="~/Paginas.Master" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Content1" runat="server">
       
<script type="text/javascript" src="http://www.google.com/jsapi"></script>        
<script type="text/javascript">
    google.load("jquery", "1.4.2");
</script>
<script type="text/javascript">
    $(document).ready(function() {
        try {
            $('#archive-list li:even').addClass("odd");
            $('.field-group, .field-group input, .field-group select').bind('click', function(event) {
                if (event.type == 'click') {
                    if ($(this).hasClass('field-group')) {
                        var fg = $(this);
                        if ($(this).children('.datefield').length == 1) {
                            // Do not select 1st input so date picker will work.
                        } else {
                            $(this).find('input, select').slice(0, 1).focus();
                        }
                    } else {
                        var fg = $(this).parents('.field-group');
                        $(this).focus();
                    }
                    fg.not('.focused-field').addClass('focused-field').children('.field-help').slideDown('fast');
                    $('.focused-field').not(fg).removeClass('focused-field').children('.field-help').slideUp('fast');
                }
                event.stopPropagation();
            });
            $('label').bind('click', function(event) {
                if (event.type == 'click') {
                    var fg = $(this).next();

                    if (fg.children('.datefield').length == 1) {
                        // Do not select 1st input so date picker will work.
                    } else {
                        fg.find('input, select').slice(0, 1).focus();
                    }
                    fg.not('.focused-field').addClass('focused-field').children('.field-help').slideDown('fast');
                    $('.focused-field').not(fg).removeClass('focused-field').children('.field-help').slideUp('fast');
                }
                event.stopPropagation();
            });
            // Allow select inputs to be width:auto up to 500px (because max-width doesn't work in IE7)
            $("select").each(function() {
                $(this).css("width", "auto");
                if ($(this).width() > 500) {
                    $(this).css("width", "500px");
                }
            });

        } catch (e) { console.log(e); }
    });		
</script>

        
	<style type="text/css">
		p{
			padding:0 0 10px 0;
		}
		textarea{
			font:12px/18px 'Helvetica', Arial, sans-serif;
		}
		h2{
			font-size:22px;
			line-height:28px;
			margin:0 0 10px 0;
		}
		h3{
			margin:0 0 5px 0;
			padding:0;
		}
		.headerBar{
			background:none;
			padding:0;
			border:none;
		}
		.wrapper{
			width:600px;
			margin:0 auto 10px auto;
			text-align:left;
		}
		.container{
			position:relative;
			border-width:0 !important;
			border-color:transparent !important;
			margin:0;
			text-align:left;
			-moz-box-shadow:2px 2px 4px rgba(0,0,0,0.1);
			-webkit-box-shadow:2px 2px 4px rgba(0,0,0,0.1);
			box-shadow:2px 2px 4px rgba(0,0,0,0.1);
		}
		.tpl-image-content{
			padding-left:20px;
		}
		fieldset{
			padding:10px;
			background-color:#ddd;
			border:1px solid #ccc;
		}
		label{
			float:none;
			clear:both;
			display:block;
			width:auto;
			margin-top:8px;
			text-align:left;
			font-weight:bold;
			position:relative;
		}
		.field-group{
			float:none;
			margin:3px 0 15px 0;
			padding:5px;
			border-style:solid;
			background:-moz-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, .25));
			background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0, rgba(255, 255, 255, 0)),color-stop(1, rgba(255, 255, 255, .25)));
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#3fffffff');
			-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#3fffffff')";
		}
		.field-group input{
			display:block;
			margin:0;
			padding:5px;
			border:0;
			background:none;
			width:98%;
		}
		.radiogroup input,.phonearea input,.addressfield input,.datefield input,.groups input{
			width:auto;
		}
		.field-group label{
			clear:none;
		}
		.field-group textarea{
			background:none;
			border:none;
			width:525px;
			height:150px;
			margin:0;
			overflow:auto;
		}
		.field-help{
			display:none;
			font-weight:normal;
			position:static;
			float:none;
			clear:both;
			margin:5px -5px -5px -5px;
			width:auto;
			padding:8px 10px;
			line-height:16px;
			font-size:12px;
			-moz-border-radius:0;
			border-radius:0;
			-webkit-border-radius:0;
		}
		.field-help .help{
			min-height:16px;
			text-decoration:none;
		}
		.field-group .feedback br{
			display:none;
		}
		.field-group .feedback div{
			margin:0 !important;
			padding:0 !important;
		}
		.indicates-required{
			text-align:right;
		}
		.indicates-required span{
			font-size:150%;
			font-weight:bold;
		}
		label .asterisk{
			position:absolute;
			top:36px;
			right:10px;
			font-size:30px;
		}
		.error,.errorText{
			margin:5px 0 0 0;
			padding:5px 10px;
		}
		.formstatus{
			margin-bottom:10px;
		}
		.alert{
			background:#e4f3d4;
			border:2px solid #5ca000;
			font-size:14px;
			color:#5ca000;
			margin:10px 0;
			padding:10px;
		}
		.alert a{
			color:#5ca000;
			text-decoration:underline;
		}
		.datefield,.phonefield-us{
			padding:5px;
		}
		.datefield input,.phonefield-us input{
			display:inline;
			width:60px;
			margin:0 2px;
			letter-spacing:1px;
			text-align:center;
			padding:5px 0 2px 0;
		}
		.datefield .small-meta{
			font-size:11px;
		}
		.phonefield-us .phonearea input,.phonefield-us .phonedetail1 input{
			width:40px;
		}
		.datefield .monthfield input,.datefield .dayfield input{
			width:30px;
		}
		.datefield label,.phonefield-us label{
			display:none;
		}
		ul.interestgroup_field{
			display:block;
			padding:5px;
			margin:0;
		}
		ul.interestgroup_field li,.interestgroup_row{
			display:block;
			margin:0;
			padding:0;
			list-style:none;
		}
		ul.interestgroup_field input{
			display:inline !important;
			width:auto !important;
		}
		ul.interestgroup_field label{
			display:inline;
			padding:0 30px 0 3px;
			font-weight:normal;
		}
		select{
			width:300px;
			margin:5px;
		}
		ul.unsub-options{
			display:block;
		}
		ul.unsub-options li{
			display:block;
			padding-bottom:5px;
		}
		ul.unsub-options li label{
			display:inline;
			padding-left:5px;
		}
		ul.unsub-options li textarea{
			display:block;
			padding:5px;
			background:#fff;
			border:1px solid #ccc;
			margin:5px 0;
			width:350px;
			height:100px;
		}
		.addressfield span{
			display:block;
			height:34px;
		}
		.addressfield input{
			float:right;
			width:56%;
			margin:0 9% 0 0;
			padding:8px 0 2px 0;
		}
		.addressfield label{
			float:left;
			font-weight:normal;
			text-align:right;
			width:33%;
		}
		.addressfield .countryfield{
			display:block;
			height:45px;
			position:relative;
		}
		.addressfield .countryfield select{
			margin:0;
			position:absolute;
			top:10px;
			left:35%;
		}
		.captcha{
			float:left;
			width:340px;
			height:170px;
		}
		#archive-list{
			display:block;
			margin:15px 0;
			padding:0;
			border-top:1px solid #eee;
		}
		#archive-list li{
			display:block;
			list-style:none;
			margin:0;
			padding:6px 10px;
			border-bottom:1px solid #eee;
		}
		.button,.button-small{
			display:inline-block;
			font-family:'Helvetica', Arial, sans-serif;
			width:auto;
			white-space:nowrap;
			height:32px;
			margin:5px 5px 0 0;
			padding:0 22px;
			text-decoration:none;
			text-align:center;
			font-weight:bold;
			font-style:normal;
			font-size:15px;
			line-height:32px;
			cursor:pointer;
			border:0;
			-moz-border-radius:4px;
			border-radius:4px;
			-webkit-border-radius:4px;
			vertical-align:top;
		}
		.button-small{
			float:none;
			display:inline-block;
			height:auto;
			line-height:18px !important;
			padding:2px 15px !important;
			font-size:11px !important;
		}
		.button span{
			display:inline;
			font-family:'Helvetica', Arial, sans-serif;
			text-decoration:none;
			font-weight:bold;
			font-style:normal;
			font-size:15px;
			line-height:32px;
			cursor:pointer;
			border:none;
		}
		.rounded6{
			-moz-border-radius:6px;
			border-radius:6px;
			-webkit-border-radius:6px;
		}
		.poweredWrapper{
			padding:20px 0;
			width:560px;
			margin:0 auto;
		}
		.poweredBy{
			display:block;
		}
		span.or{
			display:inline-block;
			height:32px;
			line-height:32px;
			padding:0 5px;
			margin:5px 5px 0 0;
		}
		.clear{
			clear:both;
		}
		.tpl-image-content{
			padding-left:0px;
		}
		.profile-list{
			display:block;
			margin:15px 20px;
			padding:0;
			list-style:none;
			border-top:1px solid #eee;
		}
		.profile-list li{
			display:block;
			margin:0;
			padding:5px 0;
			border-bottom:1px solid #eee;
		}
		body{
			-webkit-text-size-adjust:none;
		}
		input{
			-webkit-appearance:none;
		}
		input[type=checkbox]{
			-webkit-appearance:checkbox;
		}
		input[type=radio]{
			-webkit-appearance:radio;
		}
		h1{
			font-size:28px;
			margin-bottom:15px;
			padding:0;
			margin-top:0;
		}
		#templateContainer{
			background-color:none;
		}
		#templateBody{
			background-color:#ffffff;
		}
		.bodyContent{
			line-height:150%;
			font-family:Helvetica;
			font-size:12px;
			color:#333333;
			padding:20px;
		}
		a:link,a:active,a:visited,a{
			color:#336699;
		}
		.button:link,.button:active,.button:visited,.button,.button span,.button-small:link,.button-small:active,.button-small:visited,.button-small{
			background-color:#336699;
			color:#ffffff;
		}
		.button:hover,.button-small:hover{
			background-color:#1e5781;
			color:#ffffff;
		}
		label{
			line-height:150%;
			font-family:Helvetica;
			font-size:14px;
			color:#333333;
		}
		.field-group{
			background-color:#eeeeee;
			border-width:2px;
			border-color:#d0d0d0;
		}
		.datefield input,.phonefield-us input,.addressfield input{
			border-bottom-width:1px;
			border-bottom-style:solid;
			border-color:#999999;
		}
		.field-group input{
			font-family:Helvetica;
			font-size:16px;
			color:#333333;
		}
		.asterisk {
			color:#cc6600;
			margin-right: 0px;
		}
		.field-help{
			background-color:#dcdcdc;
			color:#000;
		}
		.error,.errorText{
			font-size:12px;
			color:#6b0505;
			background-color:#f4bfbf;
		}
</style>
<body>
<div class="wrapper rounded6" id="templateContainer">
<br /><br />
    <h1><a href="http://www.truesys.com" target="_blank"><img alt="True Systems" height="66" src="https://d2q0qd5iz04n9u.cloudfront.net/_ssl/proxy.php/http/gallery.mailchimp.com/0396d1b0d8a3e1bae775c4259/files/ts80x66.png" style="margin-bottom: -5px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; border-image: initial; margin-left: 10px; margin-right: 10px; width: 80px; height: 66px; " width="80"></a><span style="color:#000033;">Newsletter</span></h1>

    <div id="templateBody" class="bodyContent rounded6">
        <div><span style="color:#006699; font-size:12pt;"><strong>Inscreva-se na Newsletter da True Systems e receba novidades e promo&ccedil;&otilde;es direto em seu email.</strong></span></div>
            <br />
            <div class="indicates-required"><span class="asterisk">*</span>obrigatório</div>

            <form action="http://truesys.us2.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="0396d1b0d8a3e1bae775c4259">
            <input type="hidden" name="id" value="13ccd727d3">


            <div id="mergeTable" class="mergeTable">
                <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
                    <label for="MERGE0"><strong>Email</strong> <span class="asterisk">*</span></label>
                    <div class="field-group">
                        <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
                        <div class="field-help">Digite aqui seu email para receber as novidades sobre produtos da True Systems</div>
                    </div>
                </div>

                <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
                    <label for="MERGE1"><strong>Nome</strong> <span class="asterisk">*</span></label>
                    <div class="field-group">
                        <input type="text" name="MERGE1" id="MERGE1" size="25" value="">
                        <div class="field-help">Digite seu nome.</div>
                    </div>
                </div>

                <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
                    <label for="MERGE2">Empresa</label>
                    <div class="field-group">
                        <input type="text" name="MERGE2" id="MERGE2" size="25" value="">
                        <div class="field-help">Digite o nome da empresa em que trabalha.</div>  
                    </div>
                </div>
            </div>


            <div class="mergeRow">
	            <label>Formato preferido</label>
                <div class="field-group groups">
                    <ul class="interestgroup_field">
	                    <li><input type="radio" name="EMAILTYPE" id="EMAILTYPE_HTML" value="html" checked><label for="EMAILTYPE_HTML">HTML</label></li>
	                    <li><input type="radio" name="EMAILTYPE" id="EMAILTYPE_TEXT" value="text" ><label for="EMAILTYPE_TEXT">Texto</label></li>
	                    <li><input type="radio" name="EMAILTYPE" id="EMAILTYPE_MOBILE" value="mobile" ><label for="EMAILTYPE_MOBILE">Celular</label></li>
                    </ul>
	            </div>
            </div>

            <br />

            <div class="submit_container">
                <input type="submit" class="button" name="submit" value="Assinar a lista">
            </div>
        </form>
    </div>
</div>
		
</asp:Content>
