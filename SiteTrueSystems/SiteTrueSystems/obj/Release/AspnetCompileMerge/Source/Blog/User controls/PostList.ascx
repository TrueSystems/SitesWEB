<%@ Control Language="C#" AutoEventWireup="true" EnableViewState="false" Inherits="User_controls_PostList" Codebehind="PostList.ascx.cs" %>
<div runat="server" id="posts" class="posts" />

<div id="postPaging">
  <a runat="server" ID="hlPrev" style="float:left">&lt;&lt; <%=Resources.labels.previousPosts %></a>
  <a runat="server" ID="hlNext" style="float:right"><%=Resources.labels.nextPosts %> &gt;&gt;</a>
</div>