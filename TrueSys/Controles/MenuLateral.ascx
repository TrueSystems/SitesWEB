<%@ Control Language="vb" AutoEventWireup="false" Codebehind="MenuLateral.ascx.vb"
    Inherits="Truesys.MenuLateral" %>
<style type="text/css" >
body{background: #FFF;color: #333;text-align:center;font: 16px "Trebuchet MS",Verdana,Arial,sans-serif}
 #menuLateral 
 {
	width:150px;
	margin-right:20px;
 }
 #menuLateral ul 
 { 
    list-style:none;
    margin:0; 
    padding:0;
  }
  #menuLateral ul li 
  { 
    margin-bottom:2px;
  }#menuLateral ul li a 
  { 
  background-color:#333; 
  border:1px solid #999; 
  color:#FFF; 
  display:block; 
  padding:10px 5px 10px 15px; 
  text-decoration:none;
  }
  #menuLateral ul li a:hover 
  { 
    background-color:#ccc; color:#333;
  }
</style>
<div id="menuLateral">
    <ul class="menu">
        <li><div id="menuPwap" ><a href="../pwap.aspx">PWAP </a></div></li>
        <li><div id="menuCust"><a href="../customerLink.aspx">Customer Link  </a></div></li>
        <li><div id="menuFlux"><a href="../onFlux.aspx">On Flux</a></div></li>
        <li><div id="menuVisita"><a href="../visitaMedica.aspx">Visita Médica </a></div></li>
    </ul>
</div>
