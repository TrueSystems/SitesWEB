<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="VideoPwapIntroducao.aspx.vb" Inherits="Truesys.VideoPwapIntroducao" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>PWAP - INTRODUÇÃO</title>
</head>
<body>
<object id='playerFlash' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='500' height='375'>
<param name='movie' value='http://www.videolog.tv/ajax/codigoPlayer.php?id_video=380087&relacionados=S&default=S&lang=PT_BR&cor_fundo=FFFFFF&cor_titulo=777777&hd=S&swf=1&width=500&height=375' />
<param name='flashvars' value='id_video=380087' /><param name='allowScriptAccess' value='always' />
<param name='allowFullScreen' value='true' />
<param name='wmode' value='opaque' />
<%--<embed src="http://www.videolog.tv/ajax/codigoPlayer.php?id_video=380087&relacionados=S&default=S&lang=PT_BR&cor_fundo=FFFFFF&cor_titulo=777777&hd=S&swf=1&width=500&height=375" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="500" height="375"></embed>--%>
</object>
</body>
</html>
