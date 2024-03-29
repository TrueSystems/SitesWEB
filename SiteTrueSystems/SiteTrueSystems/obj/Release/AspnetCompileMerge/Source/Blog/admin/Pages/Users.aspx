﻿<%@ Page Language="C#" MasterPageFile="~/admin/admin1.master" AutoEventWireup="true" Inherits="admin_newuser" Title="Create new user" Codebehind="Users.aspx.cs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphAdmin" runat="Server">

    <div class="settings">
        <h1><%=Resources.labels.createNewUser %></h1>
        <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" LoginCreatedUser="false">
            <TextBoxStyle Width="200" />
            <TitleTextStyle Font-Bold="true" Height="25" />
            
            <WizardSteps>
                <asp:CreateUserWizardStep ID="CreateUserWizardStep1" runat="server" />
            </WizardSteps>
        </asp:CreateUserWizard>
        <asp:Label runat="server" ID="lblError" Text="Username is already taken" style="color:Red" visible="false" />
    </div>

    <div class="settings">
        <asp:GridView runat="server" ID="gridUsers" 
            AutoGenerateColumns="false"       
            BorderColor="#f8f8f8" 
            BorderStyle="solid" 
            BorderWidth="1px" 
            RowStyle-BorderWidth="0"
            RowStyle-BorderStyle="None"
            gridlines="None"
            width="100%"
            AlternatingRowStyle-BackColor="#f8f8f8"
            AlternatingRowStyle-BorderColor="#f8f8f8" 
            HeaderStyle-BackColor="#F1F1F1"
            cellpadding="3"
            DataKeyNames="username" 
            OnLoad="gridUsers_Load" 
            UseAccessibleHeader="true" 
            AutoGenerateEditButton="true" 
            AutoGenerateDeleteButton="true">
            <Columns>
                
                <asp:TemplateField HeaderText="<%$ Resources:labels, username %>">
                  <ItemTemplate>
                    <asp:Label ID="labelUsername" runat="server" Text='<%# Server.HtmlEncode(Eval("username").ToString()) %>' ></asp:Label>
                  </ItemTemplate>
                </asp:TemplateField>
                
                <asp:TemplateField HeaderText="<%$ Resources:labels, password %>">
                  <ItemTemplate>
                    **********
                  </ItemTemplate>
                </asp:TemplateField>
                
                <asp:TemplateField HeaderText="<%$ Resources:labels, email %>">
                  <ItemTemplate>
                    <%# Server.HtmlEncode(Eval("email").ToString()) %>
                  </ItemTemplate>
                  <EditItemTemplate>
                    <asp:TextBox runat="server" ID="txtEmail" Text='<%# Eval("email") %>' />
                  </EditItemTemplate>
                </asp:TemplateField>
                
                <asp:TemplateField HeaderText="Roles" ItemStyle-Wrap="false" ItemStyle-Width="100%" />
            </Columns>
            <HeaderStyle HorizontalAlign="Left" />
        </asp:GridView>
    </div>
</asp:Content>
