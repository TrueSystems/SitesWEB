﻿<%@ Page Title="" Language="C#" MasterPageFile="~/admin/admin1.master" AutoEventWireup="true" Inherits="admin_Comments_Spam" Codebehind="Spam.aspx.cs" %>
<%@ Register src="DataGrid.ascx" tagname="DataGrid" tagprefix="uc1" %>
<%@ Register src="Menu.ascx" tagname="TabMenu" tagprefix="menu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphAdmin" Runat="Server">  
    <div class="settings">
        <menu:TabMenu ID="TabMenu" runat="server" />
        <uc1:DataGrid ID="DataGridComments" runat="server" />
    </div>       
</asp:Content>