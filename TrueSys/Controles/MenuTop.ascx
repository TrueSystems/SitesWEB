<%@ Control Language="vb" AutoEventWireup="false" CodeBehind="MenuTop.ascx.vb" Inherits="Truesys.MenuTop" %>
<style type="text/css" >
    Body{margin-left:-2px;}
</style>
<script type="text/javascript" >
            $(document).ready(
   function() { 
      $("div#produtos").mouseover(      
         function(event) {
              $("#filhoEmpresa").hide(0.1); 
              $("#filhoProdutos").show("normal");                                       
            return true;
         }
      ) 
      $("div#produtos").click(      
         function(event) {
              $("#filhoEmpresa").hide(0.1); 
              $("#filhoProdutos").show("normal");                                       
            return true;
         }
      ) 
      $("div#empresa").mouseover(       
         function(event) {
                    $("#filhoProdutos").hide(0.1); 
                    $("#filhoEmpresa").show("normal");                      
            return true;
         }
      )
      $("div#empresa").click(       
         function(event) {
                    $("#filhoProdutos").hide(0.1); 
                    $("#filhoEmpresa").show("normal");                      
            return true;
         }
      )
       $("div#home").mouseover(       
         function(event) {
                document.getElementById("filhoEmpresa").style.display = 'none'; 
                document.getElementById("filhoProdutos").style.display = 'none';                                               
            return true;
         }
      )
      $("div#centro").mouseover(       
         function(event) {
                document.getElementById("filhoEmpresa").style.display = 'none'; 
                document.getElementById("filhoProdutos").style.display = 'none';             
            return true;
         }
      )
      $("div#defaultPage").mouseover(       
         function(event) {
                document.getElementById("filhoProdutos").style.display = 'none';
                document.getElementById("filhoEmpresa").style.display= 'none';                                       
            return true;
         }
      )
      $("div#cabecalho").mouseover(       
         function(event) {
                document.getElementById("filhoProdutos").style.display = 'none';
                document.getElementById("filhoEmpresa").style.display= 'none';                                       
            return true;
         }
      )
      $("div#suporte").mouseover(       
         function(event) {
                document.getElementById("filhoEmpresa").style.display = 'none'; 
                document.getElementById("filhoProdutos").style.display = 'none';                                               
            return true;
         }
      )
      $("div#blog").mouseover(
        function(event) {
                document.getElementById("filhoEmpresa").style.display = 'none';
                document.getElementById("filhoProdutos").style.display = 'none';
            return true;
        }
      )
        $("div#twitter").mouseover(
        function(event) {
            document.getElementById("filhoEmpresa").style.display = 'none';
            document.getElementById("filhoProdutos").style.display = 'none';
            return true;
        }
      )
        $("div#facebook").mouseover(
        function(event) {
            document.getElementById("filhoEmpresa").style.display = 'none';
            document.getElementById("filhoProdutos").style.display = 'none';
            return true;
        }
      )
        $("div#newsletter").mouseover(
        function(event) {
            document.getElementById("filhoEmpresa").style.display = 'none';
            document.getElementById("filhoProdutos").style.display = 'none';
            return true;
        }
      )
        $("div#faleconosco").mouseover(
        function(event) {
            document.getElementById("filhoEmpresa").style.display = 'none';
            document.getElementById("filhoProdutos").style.display = 'none';
            return true;
        }
      )   
    }
);
</script>
<div style="float:left"><img src="../images/MenuEsq.gif" /></div>
<div class="MenuPai">
<div onclick="location.href='Default.aspx'"  id="home" class="MenuHome"  onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Home</span>
</div>
<div id="produtos" class="MenuPaiProdutos" onmouseover="MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Produtos</span>
    <div style="margin-top:11px ">               
            <div id="filhoProdutos" class="MenuFilhoProdutos" >
            <div onclick="location.href='pwap.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Pwap
            </div> 
            <div onclick="location.href='onFlux.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Onflux
            </div>
            <div onclick="location.href='onFluxRadar.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Onflux Radar
            </div>   
        </div>
    </div> 
</div>
<div id="empresa" class="MenuPaiEmpresa" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >A Empresa</span>
    <div  style="margin-top:11px ">               
            <div id="filhoEmpresa" class="MenuFilhoEmpresa">
            <div onclick="location.href='sobre.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Sobre
            </div> 
            <div onclick="location.href='casos.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Casos
            </div>
            <div onclick="location.href='premios.aspx'" style="padding-left:10px;border-bottom:1px solid #d1d1d1;padding-top:3px;padding-bottom:3px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Prêmios
            </div> 
            <div onclick="location.href='parcerias.aspx'" style="padding-left:10px;padding-top:3px;padding-bottom:3px;_width:90px" onmouseover="MenuHover(this)"
                onmouseout="MenuOut(this)">
                Parcerias
            </div> 
        </div>
    </div> 
</div>
<div id="suporte" onclick="location.href='suporte.aspx'" class="MenuSuporte" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Suporte</span>
</div>

<div id="blog" onclick="location.href='http://www.truesys.com/blog'" class="MenuBlog" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Blog</span>
</div>

<div id="twitter" onclick="location.href='http://twitter.com/#!/truesystems'" class="MenuTwitter" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span ><img src="../images/twitter-icon.png" width="30px" height="30px"/></span>
</div>

<div id="facebook" onclick="location.href='http://www.facebook.com/truesys'" class="MenuFacebook" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span ><img src="../images/FaceBook_512x512.png" width="30px" height="30px"/></span>
</div>

<div id="newsletter" onclick="location.href='Newsletter.aspx'" class="MenuNewsletter" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Newsletter</span>
</div>

<div id="faleconosco" onclick="location.href='FaleConosco.aspx'" class="MenuFaleConosco" onmouseover="javascript:MenuHoverPai(this,2)" onmouseout="javascript:MenuOut(this)">
    <span >Fale Conosco</span>
</div>

<div style="background-color :#6c6c6c;font-size:14px;font-family:Verdana;width:auto;padding-bottom:18px;">&nbsp;</div>
</div>

<div style="padding-bottom:5px;_padding-right:3px"><img style="_margin-left:-3px" src="../images/MenuDir.gif" /></div>