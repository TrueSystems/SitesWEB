﻿<%@ Control Language="C#" AutoEventWireup="true" Inherits="widgets_Twitter_widget" Codebehind="widget.ascx.cs" %>
<asp:Repeater runat="server" ID="repItems" OnItemDataBound="repItems_ItemDataBound">
  <ItemTemplate>
    <img src="<%=BlogEngine.Core.Utils.RelativeWebRoot %>widgets/twitter/twitter.ico" alt="Twitter" />
    <asp:Label runat="server" ID="lblDate" style="color:gray" /><br />
    <asp:Label runat="server" ID="lblItem" /><br /><br />
  </ItemTemplate>
</asp:Repeater>

<asp:HyperLink runat="server" ID="hlTwitterAccount" Text="Follow me on Twitter" rel="me" />