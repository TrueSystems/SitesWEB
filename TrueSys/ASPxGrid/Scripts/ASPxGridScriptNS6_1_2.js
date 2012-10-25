/* 
   ASPxGrid Suite by Developer Express

   Copyright (c) 2000-2002 Developer Express Inc  
   ALL RIGHTS RESERVED

   The entire contents of this file is protected by U.S. and   
   International Copyright Laws. Unauthorized reproduction,     
   reverse-engineering, and distribution of all or any portion of   
   the code contained in this file is strictly prohibited and may  
   result in severe civil and criminal penalties and will be        
   prosecuted to the maximum extent possible under the law.
*/

var leftBtnPressed = 1;
var columnSizingEdge = 5;
var isMozilla = navigator.userAgent.toLowerCase().indexOf("gecko") >-1 && navigator.userAgent.toLowerCase().indexOf("netscape6") < 0;

function ClearColumnSizingState(){
	curSizing = false;
	curSzLn = null;
	curX = 0;
	curRszHdr = null;
	curColInd = -1;
	curDragAct = 0;
}

function ClearDragState(){
	curGridName = "";
	curDragEl = null;
	curColInd = -1;
	curDragAct = 0;
	curX = 0;
	curY = 0;		
	curTargetHdr = null;
	curArrUp = null;
	curArrDown = null; 
	curArrUpX = -1;
	curArrUpY = -1;
	curArrDownX = -1;
	curArrDownY = -1;
}

function InitializeEnableFlags(){
	curEnblHdrClick = false;
	curEnblHdrDrag = false;
	curEnblGroup = false;
	curEnblClmnMove = false;
	curEnblClmnSize = false;
	curShowArr = false;
}

function replaceDblColon(_str){
	var _indexOf = _str.indexOf("::");
	if(_indexOf == -1){
		return _str;
	}
	else{
		var _str1 = _str.substr(0, _indexOf + 1);		
		var _str2 = _str.substr(_indexOf + 2, _str.length);
		return _str1 + replaceDblColon(_str2);
	}
}

function dxDataGridMDown(evt){		
	var btn = evt.target;		
	while(btn != null && (btn.tagName != "TD" || btn.id == ""))
		btn = btn.parentNode;	
	if(btn != null && btn.id != undefined){		
		var indexOf_ = btn.id.indexOf("~EB~");
		if(indexOf_ != -1)
			return OnEBCl(btn, btn.id.substr(0, indexOf_));
		indexOf_ = btn.id.indexOf("~LI~");
		if(indexOf_ != -1)
			return OnRBMoveToCl(btn.id.substr(0, indexOf_), btn);
			
		indexOf_ = btn.id.indexOf("~OnRBInsCl~");
		if(indexOf_ != -1)
			return OnRBInsCl(btn, btn.id.substr(0, indexOf_));
		indexOf_ = btn.id.indexOf("~OnRBEditCl~");
		if(indexOf_ != -1)
			return OnRBEditCl(btn, btn.id.substr(0, indexOf_));
		indexOf_ = btn.id.indexOf("~OnRBDelCl~");
		if(indexOf_ != -1)
			return OnRBDelCl(btn, btn.id.substr(0, indexOf_));
		indexOf_ = btn.id.indexOf("~OnRBOkCl~");
		if(indexOf_ != -1)
			return OnRBOkCl(btn.id.substr(0, indexOf_));
		indexOf_ = btn.id.indexOf("~OnRBCancelCl~");
		if(indexOf_ != -1)
			return OnRBCancelCl(btn.id.substr(0, indexOf_));
			
		indexOf_ = btn.id.indexOf("~NBChPS~");
		if(indexOf_ != -1)
			return OnNBChPSCl(evt, btn.id.substr(0, indexOf_));			
	}		

	var tr = evt.target.parentNode;
	for(i = 0; i < 2; i ++)	{	
		if(tr.tagName != "TR")
			tr = tr.parentNode;
	}	
	if(tr.id != undefined){
		var indexOf_TR_ = tr.id.indexOf("~TR~");
		if(indexOf_TR_ == -1)
			indexOf_TR_ = tr.id.indexOf("~GTR~");
		if(indexOf_TR_ != -1)
			return OnTRCl(evt, tr.id.substr(0, indexOf_TR_));
	}	
	
	var header = evt.target;	
	while(header != null && (header.tagName != "TD" || header.id == "")){
		header = header.parentNode;
	}
	if(header != null && header.id != undefined){		
		var headerPrefix = "~CH~";
		var indexOf_Header_ = header.id.indexOf(headerPrefix);
		if(indexOf_Header_ == -1){
			headerPrefix = "~GH~";
			indexOf_Header_ = header.id.indexOf(headerPrefix);
		}
		if(indexOf_Header_ != -1){
			var gridName = header.id.substr(0, indexOf_Header_);
			var hdrInd = header.id.substr(indexOf_Header_ + ("~CH~").length, header.id.length);			
			return OnHMDown(evt, header, gridName, hdrInd, headerPrefix);
		}
	}
	return true;
}

function AbsoluteX(curEl, gridName, correctPos, correctionNeeded){
    posX = 0;
    if(curEl.offsetParent != null)
        posX = AbsoluteX(curEl.offsetParent)
	posX += curEl.offsetLeft;
    return posX;
}

function AbsoluteY(curEl, gridName, correctPos){
    posY = 0;
    if(curEl.offsetParent != null)
        posY = AbsoluteY(curEl.offsetParent);
	posY += curEl.offsetTop;
    return posY;
}

function OnGBCl(evt){	
	var header = evt.target;
	while(header != null && (header.tagName != "TD" || header.id == "")){
		header = header.parentNode;
	}	
	if(header != null){		
		var _indexOf = header.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = header.id.substr(0, _indexOf);		
			var hdrInd = header.id.substr(_indexOf + ("~GB~").length, header.id.length);
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null){				
				var column = gridObj.GetColumnByIndex(hdrInd);
				if(column != null && column.enableGrouping){
					if(header.id.indexOf("~GB~") != -1)
						__doPostBack(replaceDblColon(gridName), "GROUP:GB:" + hdrInd + ":-1");
					else
						__doPostBack(replaceDblColon(gridName), "UNGROUP:GB:" + hdrInd + ":-1");
				}
			}
		}
	}
}

function OnHMDown(evt, header, gridName, hdrInd, headerPrefix){
	try{			
		var gridObj = __ASPxGridCollection.Get(gridName);
		if(gridObj != null){			
			if(curSizing){				
				curSzLn = document.getElementById(gridName + "sizerline");		
				if(curSzLn != null){					
					curGridName = gridName;		
					curDragAct = 10000;		
					curX = (evt.clientX + window.pageXOffset);
					curSzLn.style.cursor = "e-resize";
					curSzLn.style.visibility = "visible";		
					curSzLn.style.left = curX;
					curSzLn.style.top = AbsoluteY(header);
					curSzLn.style.width = 1; 
					var scroller = document.getElementById(gridName + "scroller");					
					if(scroller != null)
						curSzLn.style.height = scroller.offsetHeight; 
					else
						curSzLn.style.height = gridObj.GetRowsHeight(header.parentNode.parentNode); 
				}
			}
			else{
				InitializeEnableFlags();				
				var column = gridObj.GetColumnByIndex(hdrInd);
				if(column != null){
					curEnblHdrClick = column.enableHeaderClick;
					curEnblHdrDrag = column.enableHeaderDragging;
					curEnblGroup = column.enableGrouping;
					curEnblClmnMove = column.enableColumnMoving;							
					curEnblClmnSize = column.enableColumnSizing;
				}
				curShowArr = gridObj.showArrowsOnDragging;							
				if(curEnblHdrClick || curEnblHdrDrag){			
					var dragHdr = document.getElementById(gridName + "~DH~" + hdrInd);					
					CheckPageSizeEdit(gridName);		
					curDragAct = ((headerPrefix == "~GH~") ? 10001 : 10000)
					dragHdr.style.visibility = "visible";		
					dragHdr.style.left = AbsoluteX(header) + (isMozilla ? 0 : -1);
					dragHdr.style.top = AbsoluteY(header) + (isMozilla ? 1 : 0);
					dragHdr.style.width = header.offsetWidth; 
					dragHdr.style.height = header.offsetHeight; 		
					curGridName = gridName;
					curColInd = hdrInd;
					curX = (evt.clientX + window.pageXOffset);
					curY = (evt.clientY + window.pageYOffset);		
					curDragEl = dragHdr;			
					curArrUp = document.getElementById(gridName + "arrowup");		
					curArrDown = document.getElementById(gridName + "arrowdown");; 
				}
			}
		}
	}
	catch(e){
	}
	return false;
}

function UpdateArrowsPos(arrowImgWidth){
	if(curTargetHdr != null){
        curArrUpX = curTargetHdr.x - arrowImgWidth / 2;                
        curArrUpY = curTargetHdr.y + curTargetHdr.height;
        curArrDownX = curTargetHdr.x - arrowImgWidth / 2;
        curArrDownY = curTargetHdr.y - arrowImgWidth;
	}
}

function ShowArrows(){
    curArrUp.style.left = curArrUpX;    
    curArrUp.style.top = curArrUpY;
    curArrDown.style.left = curArrDownX;
    curArrDown.style.top = curArrDownY;

    curArrUp.style.visibility = "visible";
    curArrDown.style.visibility = "visible";
}

function HideArrows(){
    curArrUp.style.visibility = "hidden";
    curArrDown.style.visibility = "hidden";
}

function OnDHMMove(evt){	
	try	{		
		if(curDragEl != null || curSzLn != null){
			if(curDragEl == null){					
				newX = (evt.clientX + window.pageXOffset);
				if(newX < curRszHdr.x + curRszHdr.minWidth)
					newX = curRszHdr.x + curRszHdr.minWidth;
				distanceX = (newX - curX);
				if(distanceX != 0){				
					curX = newX;
					curSzLn.style.left = curSzLn.offsetLeft + distanceX;
					curDragAct = 4;
				}				
			}
			else{
				if(curEnblHdrDrag){			
					var header;
					header=curDragEl;				
					if(curDragAct == 10000)
						curDragAct = 2;
					if(curDragAct == 10001)
						curDragAct = 3;
					newX = (evt.clientX + window.pageXOffset);
					newY = (evt.clientY + window.pageYOffset);
					distanceX = (newX - curX);
					distanceY = (newY - curY);
					curX = newX;
					curY = newY;

					header.style.left = header.offsetLeft + distanceX;
					header.style.top = header.offsetTop + distanceY;    	
					
					var gridObj = __ASPxGridCollection.Get(curGridName);
					if(gridObj != null){										
						curTargetHdr	= null;
						if(curDragAct == 2 && curEnblClmnMove || curDragAct == 3 && curEnblGroup)
							curTargetHdr = gridObj.GetTargetHeaderInfo(header.offsetLeft + header.offsetWidth / 2, header.offsetTop + header.offsetHeight / 2, curColInd);
						if(curTargetHdr == null && curEnblGroup){
							curTargetHdr = gridObj.GetTargetGroupedHeaderInfo(header.offsetLeft + header.offsetWidth / 2, header.offsetTop + header.offsetHeight / 2, curColInd);
						}
						if(curShowArr){
							UpdateArrowsPos(gridObj.arrowImgWidth);
							if(curTargetHdr == null)
								HideArrows();
							else
								ShowArrows();
						}
					}
				}
			}
		}
		else{
			var header = evt.target;
			while(header != null && (header.tagName != "TD" || header.id == "" || header.id.indexOf("~CH~") == -1 && header.id.indexOf("~GH~") == -1)){
				header = header.parentNode;
			}
			if(header != null){
				var _indexOf = header.id.indexOf("~");
				if(_indexOf != -1){
					var gridName = header.id.substr(0, _indexOf);		
					var hdrInd = header.id.substr(_indexOf + ("~CH~").length, header.id.length);
					var gridObj = __ASPxGridCollection.Get(gridName);
					if(gridObj != null){						
						var clientX = evt.clientX + window.pageXOffset;
						curRszHdr = gridObj.GetResizingHeaderInfo(header, hdrInd, clientX);
						if(curRszHdr != null){							
							evt.target.style.cursor = "e-resize";
							curSizing = true;
							return;
						}
					}
				}			
			}
			evt.target.style.cursor = "default";
			curSizing = false;			
		}
		if(savedDocumentMouseMove != null)
			savedDocumentMouseMove();
	}
	catch(e){
	}
}

function OnDHMUp(evt){	
	try	{		
		if(curSzLn != null){
			if(curDragAct == 4)			
				__doPostBack(replaceDblColon(curGridName), "RESIZECOLUMN:CH:" + curRszHdr.columnIndex + ":" + (curX - curRszHdr.x - curRszHdr.width));
			curSzLn.style.cursor = "default";
			curSzLn.style.visibility = "hidden";
			ClearColumnSizingState();
		}
		else{
			if(curDragEl != null){	
				var header = curDragEl;
				var gridObj = __ASPxGridCollection.Get(curGridName);			
				if(curDragAct == 2 || curDragAct == 3){	
					if(curShowArr)
						HideArrows();						
					if(curTargetHdr != null){	
						if(curTargetHdr.inGroupingPanel){
							if(curEnblGroup && curTargetHdr.columnIndex != curColInd)
								__doPostBack(replaceDblColon(curGridName), "GROUP:CH:" + curColInd + ":" + curTargetHdr.targetIndex);
						}
						else{
							if(curDragAct == 3){
								if(curEnblGroup)
									__doPostBack(replaceDblColon(curGridName), "UNGROUP:CH:" + curColInd + ":" + curTargetHdr.targetIndex);
							}
							else{
								if(curEnblClmnMove && curTargetHdr.columnIndex != curColInd)
									__doPostBack(replaceDblColon(curGridName), "MOVECOLUMN:CH:" + curColInd + ":" + curTargetHdr.targetIndex);
							}
						}			
					}	
				}
				else{				
					if(curEnblHdrClick){
						document.getElementById(curGridName + "ShiftPressed").value = evt.shiftKey;
						document.getElementById(curGridName + "CtrlPressed").value = evt.ctrlKey;
						__doPostBack(replaceDblColon(curGridName), "SORT:CH:" + curColInd + ":0");
					}
				}
				header.style.visibility = "hidden";				
				ClearDragState();		
			}
		}
		if(savedDocumentMouseUp != null)
			savedDocumentMouseUp();
	}
	catch(e){
	}	
}

function OnEBCl(btn, gridName){	
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && gridObj.rowsExpanded != null && gridObj.controlMode == "Browse")
		gridObj.ProcessExpBtn(btn);	
	else
		__doPostBack(replaceDblColon(gridName), "EXPAND:EB:" + btn.id + ":0");
	return false;
}

function OnRBInsCl(btn,  gridName){
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && !gridObj.readOnly && gridObj.allowInsert)
		__doPostBack(replaceDblColon(gridName), "INSERT:RB:" + btn.id + ":0");
	return false;
}

function OnRBEditCl(btn,  gridName){
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && !gridObj.readOnly && gridObj.allowEdit)
		__doPostBack(replaceDblColon(gridName), "STARTEDIT:RB:" + btn.id + ":0");
	return false;
}

function OnRBCancelCl(gridName){
	__doPostBack(replaceDblColon(gridName), "CANCELEDIT:RB:0:0");		
	return false;
}

function DoDeleteRow(gridName, rowId){
	CheckPageSizeEdit(gridName);		
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && gridObj.allowDelete){
		if(!gridObj.confirmDelete || confirm(gridObj.confirmDeleteMessage))
			__doPostBack(replaceDblColon(gridName), "DELETE:" + (rowId == "-1" ? "NB" : "RB") + ":" + rowId + ":0");
	}
}

function OnRBDelCl(btn, gridName){
	DoDeleteRow(gridName, btn.id);
	return false;
}

function OnRBOkCl(gridName){
	__doPostBack(replaceDblColon(gridName), "POSTEDIT:RB:0:0");
	return false;
}

function OnRBMoveToCl(gridName, button){	
	CheckPageSizeEdit(gridName);			
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null){
		var rowId = button.id.substr(button.id.indexOf("~") + ("~LI~").length, button.id.length);
		var tr = document.getElementById(gridName + "~TR~" + rowId);
		if(tr == null)				
			tr = document.getElementById(gridName + "~GTR~" + rowId);				
		if(tr != null && !(document.getElementById(gridName + "State").value == "Edit" && document.getElementById(gridName + "FocusedRow").value == tr.id)){		
			if(gridObj != null && !gridObj.postBackOnFocusedChanged && document.getElementById(gridName + "State").value != "Edit")
				gridObj.MoveTo(tr);
			else
				__doPostBack(replaceDblColon(gridName), "MOVETO:RB:" + tr.id + ":0");
		}
	}	
	return false;
}

function GetRowID(tr){
	var isGroupRow = tr.id.indexOf("~GTR~") != -1;
	var rowId = ((isGroupRow) ? tr.id.substr(tr.id.indexOf("~") + ("~GTR~").length, tr.id.length) : tr.id.substr(tr.id.indexOf("~") + ("~TR~").length, tr.id.length));
	return rowId;
}

function OnTRCl(evt, gridName){			
	var td;
	td = evt.target;
	while(td != null && td.tagName != "TD"){
		td = td.parentNode;
	}	
	if(td != null){
		var tr;
		tr = td.parentNode;			
		CheckPageSizeEdit(gridName);		
		var gridObj = __ASPxGridCollection.Get(gridName);		
		if(gridObj != null){
			try{	
				if(!(document.getElementById(gridName + "State").value == "Edit" && document.getElementById(gridName + "FocusedRow").value == tr.id)){		
					if(document.getElementById(gridName + "State").value == "Edit"){
						__doPostBack(replaceDblColon(gridName), "MOVETO:RR:" + tr.id + ":0");
						return;
					}
					var isGroupRow = tr.id.indexOf("~GTR~") != -1;
					if(document.getElementById(gridName + "FocusedRow").value == tr.id){						
						if(gridObj.postBackOnRowDblClick){
							if(isGroupRow){
								var gridObj = __ASPxGridCollection.Get(gridName);
								if(gridObj.rowsExpanded != null)
									gridObj.ProcessExpTR(tr);	
								else
									__doPostBack(replaceDblColon(gridName), "EXPAND:RR:" + tr.id + ":0");
							}
							else{
								if(!gridObj.readOnly && gridObj.allowEdit)
									__doPostBack(replaceDblColon(gridName), "STARTEDIT:RR:" + tr.id + ":" + td.id);
							}
							return;
						}
					}
					else{
						if(!gridObj.postBackOnFocusedChanged)
							gridObj.MoveTo(tr);
						else
							__doPostBack(replaceDblColon(gridName), "MOVETO:RR:" + tr.id + ":0");
					}	
				}
				else{
					return true;
				}
			}
			catch(e){
			}	
		}
	}
}

function MoveBy(direction, gridName){		
	CheckPageSizeEdit(gridName);
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(document.getElementById(gridName + "State").value != "Edit" && !gridObj.postBackOnFocusedChanged){
		try{
			var newtrId = gridObj.MoveBy(direction);
			if(newtrId != "")
				return;
		}
		catch(e){
		}
	}
	__doPostBack(replaceDblColon(gridName), ((direction) ? "NEXT" : "PREV") + ":NB:0:0");
}

function OnNBFirstCl(gridName){
	__doPostBack(replaceDblColon(gridName), "FIRST:NB:0:0");
	return false;
}

function OnNBPrevPageCl(gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "PREVPAGE:" + btnType + ":0:0");
	return false;
}

function OnNBPrevCl(gridName){
	MoveBy(false, gridName);	
	return false;
}

function OnNBNextCl(gridName){	
	MoveBy(true, gridName);	
	return false;
}

function OnNBNextPageCl(gridName, btnType){	
	__doPostBack(replaceDblColon(gridName), "NEXTPAGE:" + btnType + ":0:0");
	return false;
}

function OnNBLastCl(gridName){
	__doPostBack(replaceDblColon(gridName), "LAST:NB:0:0");
	return false;
}

function CancelPageSize(gridName, cancel){
	try	{		
		var gridObj = __ASPxGridCollection.Get(gridName);
		if(gridObj != null){
			gridObj.CancelPageSize(cancel);		
		}
		document.getElementById(gridName + "State").value = "";
	}
	catch(e){
	}	
}

function ApplyPageSize(gridName){	
	var reg = /^[0-9]+$/;
	if(!reg.test(document.getElementById(gridName + "PageSizeEdit").value)){
		alert("The size of page must be an integer number");
	}
	else{			
		__doPostBack(replaceDblColon(gridName), "CHANGEPAGESIZE:NB:" + document.getElementById(gridName + "PageSizeEdit").value + ":0");
	}
}

function CheckPageSizeEdit(gridName){	
	if(document.getElementById(gridName + "State").value == "ChangingPageSize")
		CancelPageSize(gridName);
}

function OnNBChPSCl(evt, gridName){
	try	{		
		if(document.getElementById(gridName + "State").value == "ChangingPageSize"){
			ApplyPageSize(gridName);
		}
		else{
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null){
				gridObj.EditPageSize(evt.target);
				document.getElementById(gridName + "State").value = "ChangingPageSize";
			}
		}
	}
	catch(e){
	}
	return false;
}

function OnNBInsCl(gridName){
	var gridObj = __ASPxGridCollection.Get(gridName);	
	if(gridObj != null && !gridObj.readOnly && gridObj.allowInsert)
		__doPostBack(replaceDblColon(gridName), "INSERT:NB:-1:0");
	return false;
}

function OnNBEditCl(gridName){	
	var gridObj = __ASPxGridCollection.Get(gridName);		
	if(gridObj != null && !gridObj.readOnly && gridObj.allowEdit)
		__doPostBack(replaceDblColon(gridName), "STARTEDIT:NB:-1:0");
	return false;
}

function OnNBDelCl(gridName){
	DoDeleteRow(gridName, "-1");
	return false;
}

function OnNBRefreshCl(gridName){
	__doPostBack(replaceDblColon(gridName), "REFRESH:NB0:0");
	return false;
}

function OnNBOkCl(gridName){
	__doPostBack(replaceDblColon(gridName), "POSTEDIT:NB:0:0");
	return false;
}

function OnNBCancelCl(gridName){	
	__doPostBack(replaceDblColon(gridName), "CANCELEDIT:NB:0:0");
	return false;		
}

function OnPBGoToPageCl(gridName, btnType){	
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:" + btnType + ":" + document.getElementById(gridName + btnType + "GoToPageEdit").value + ":0");
}

function OnPBGoToPageIndCl(gridName, pageIndex){	
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:PI:" + pageIndex + ":0");
}

function OnPBSelPgCh(select, gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:" + btnType + ":" + select.value + ":0");
}

function OnScroll(gridName){
	var scrollLeftInput = document.getElementById(gridName + "ScrollLeft");
	if(scrollLeftInput != null)
		scrollLeftInput.value = document.getElementById(gridName + "scroller").scrollLeft;
	var scrollTopInput = document.getElementById(gridName + "ScrollTop");
	if(scrollTopInput != null)
		scrollTopInput.value = document.getElementById(gridName + "scroller").scrollTop;
}

function document_OnMouseDown(evt){
	var ret;
	ret = dxDataGridMDown(evt);
	if(savedDocumentMouseDown != null){
		savedDocumentMouseDown();
	}
	return ret;
}

function OnInit(){
	for(var j = 0; j < document.forms.length; j ++)	{
		for(var i = 0; i < document.forms[j].elements.length; i ++){
		    if(document.forms[j].elements[i].name != undefined && document.forms[j].elements[i].name.indexOf("ASPxGridName") != -1){
		        var gridName = document.forms[j].elements[i].value;		        
		        var tr = document.getElementById(document.getElementById(gridName + "FocusedRow").value);
		        if(tr != null){
					document.getElementById(gridName + "SavedColor").value = tr.style.color;
					document.getElementById(gridName + "SavedBkColor").value = tr.style.backgroundColor;
					tr.style.color = document.getElementById(gridName + "SelectedColor").value;
					tr.style.backgroundColor = document.getElementById(gridName + "SelectedBkColor").value;
				}
		    }
		}
	}
}

function window_OnLoad(){
	ClearDragState();
    ClearColumnSizingState();
	savedDocumentMouseDown = document.onmousedown;
    document.onmousedown = document_OnMouseDown;
    savedDocumentMouseMove = document.onmousemove;
	document.onmousemove = OnDHMMove;
	savedDocumentMouseUp = document.onmouseup;
	document.onmouseup = OnDHMUp;    
    OnInit();
}

window.onload = function(){
	window_OnLoad();
}