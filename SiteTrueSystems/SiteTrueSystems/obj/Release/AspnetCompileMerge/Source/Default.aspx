<%@ Page Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master"
    Codebehind="Default.aspx.vb" Inherits="Truesys._Default" Title="Untitled Page" %>
<asp:Content ContentPlaceHolderID="ContentDefault" runat="server">
<script type="text/javascript">
$(document).ready(function() { 
setAlpha(document.getElementById("frase01"),0);
setAlpha(document.getElementById("frase02"),0);
setAlpha(document.getElementById("frase03"),0);
setAlpha(document.getElementById("frase04"),0);
fadeIn('frase01', 0.5);
setTimeout('fadeIn(\'frase02\',0.5)',1000);
setTimeout('fadeIn(\'frase03\',0.5)',2000);
setTimeout('fadeIn(\'frase04\',0.5)',3000);
});
    </script>
        <div class="Frases">
            <div id="frase01" class="Frase" style="margin-top:40px">
                <h1 class="Automacao">Aplicações Móveis</h1>
                <img src="images/frase01.gif" />
            </div>
            <div id="frase02" class="Frase" style="margin-top:15px">
                <h1 class="Automacao">Funcionam em qualquer dispositivo</h1>
                <img src="images/frase02.gif" />
            </div>
            <div id="frase03" class="Frase" style="margin-top:15px">
                <h1 class="Automacao">Integram-se com qualquer ERP</h1> 
                <img src="images/frase03.gif" />
            </div>
            <div id="frase04" class="Frase" style="margin-top:15px">
                <img src="images/frase04.gif" />
            </div>
       </div>
      
</asp:Content>
