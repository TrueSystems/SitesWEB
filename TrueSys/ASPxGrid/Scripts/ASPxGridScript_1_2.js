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

leftBtnPressed = 1;
columnSizingEdge = 5;

function ClearColumnSizingState(){
	curGridName = "";
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

function AbsoluteX(curEl, gridName, correctPos, correctionNeeded){
    var posX = 0;
    if(curEl != null){
		if(curEl.offsetParent != null){		
		var nestedCorrectPos = correctionNeeded && (correctPos || curEl.id == gridName + "Table");
		posX = AbsoluteX(curEl.offsetParent, gridName, nestedCorrectPos, correctionNeeded);
			if (curEl.clientWidth != 0 && (!correctPos || !(curEl.style.position == "absolute" || curEl.style.overflow == "scroll" || curEl.style.overflowX == "scroll" || curEl.style.overflowY == "scroll" || curEl.style.overflow == "auto" || curEl.style.overflowX == "auto" || curEl.style.overflowY == "auto"))) 
				posX += curEl.offsetLeft;
			if(!correctPos && (curEl.style.overflow == "scroll" || curEl.style.overflowX == "scroll" || curEl.style.overflowY == "scroll" || curEl.style.overflow == "auto" || curEl.style.overflowX == "auto" || curEl.style.overflowY == "auto"))
				posX -= curEl.scrollLeft;
		}
		else{
			posX = curEl.offsetLeft;
		}
	}
    return posX;
}

function AbsoluteY(curEl, gridName, correctPos){
    var posY = 0;    
    if(curEl.offsetParent != null){
		var nestedCorrectPos = correctPos || curEl.id == gridName + "Table";
		posY = AbsoluteY(curEl.offsetParent, gridName, nestedCorrectPos);
        if(curEl.clientHeight != 0 && (!correctPos || !(curEl.style.position == "absolute" || curEl.style.overflow == "scroll" || curEl.style.overflowX == "scroll" || curEl.style.overflowY == "scroll" || curEl.style.overflow == "auto" || curEl.style.overflowX == "auto" || curEl.style.overflowY == "auto"))) 
            posY += curEl.offsetTop;
        if(!correctPos && (curEl.style.overflow == "scroll" || curEl.style.overflowX == "scroll" || curEl.style.overflowY == "scroll" || curEl.style.overflow == "auto" || curEl.style.overflowX == "auto" || curEl.style.overflowY == "auto"))
			posY -= curEl.scrollTop;
    }
    else{
        posY = curEl.offsetTop;
    }
    return posY;
}

function StartDragHeader(gridName, header, hdrInd, actionID){
	try{
		while(header != null && (header.tagName != "TD" || header.id == "")){
			header = header.parentElement;
		}
		if(header != null){
			var drgHdr;
			drgHdr = document.all(gridName + "~DH~" + hdrInd);
			CheckPageSizeEdit(gridName);			
			drgHdr.style.visibility = "visible";		
			drgHdr.style.posLeft = AbsoluteX(header, gridName, false, true);
			drgHdr.style.posTop = AbsoluteY(header, gridName, false);			
			var align = header.align;
			if(align == "")
				align = header.parentElement.align;
			drgHdr.align = align;		
			drgHdr.innerHTML = header.innerHTML;		
			drgHdr.style.posWidth = header.offsetWidth; 
			drgHdr.style.posHeight = header.offsetHeight; 
			curGridName = gridName;
			curColInd = hdrInd;
			curX = (event.clientX + document.body.scrollLeft);
			curY = (event.clientY + document.body.scrollTop);		
			curDragEl = drgHdr;
			curDragAct = actionID;		
			curArrUp = document.all(gridName + "arrowup");		
			curArrDown = document.all(gridName + "arrowdown"); 
		}
	}
	catch(e){
	}
}

function StartColumnSizing(gridName, gridObj, header){
	curSzLn = document.all(gridName + "sizerline");		
	if(curSzLn != null){
		curGridName = gridName;		
		curDragAct = 10000;		
		curX = (event.clientX + document.body.scrollLeft) - AbsoluteX(curSzLn.offsetParent, gridName, false, true) - 2;
		curSzLn.style.cursor = "e-resize";
		curSzLn.style.visibility = "visible";		
		curSzLn.style.posLeft = curX;
		curSzLn.style.posTop = AbsoluteY(header, gridName, false);
		curSzLn.style.posWidth = 1; 
		var scroller = document.all(gridName + "scroller");
		if(scroller != null)
			curSzLn.style.posHeight = scroller.offsetHeight; 
		else
			curSzLn.style.posHeight = gridObj.GetRowsHeight(header.parentElement.parentElement); 
	}
}

function EndColumnSizing(){
	curSzLn.style.cursor = "default";
	curSzLn.style.visibility = "hidden";
	ClearColumnSizingState();
}

function EndColumnDragging(){
	curDragEl.style.visibility = "hidden";
	ClearDragState();
}

function OnTMMove(){
	if(curSzLn != null){
		if((event.button & leftBtnPressed) != 0){
			newX = (event.clientX + document.body.scrollLeft) - AbsoluteX(curSzLn.offsetParent, curGridName, false, true) - 2;
			if(newX < curRszHdr.x + curRszHdr.minWidth)
				newX = curRszHdr.x + curRszHdr.minWidth;
			distanceX = (newX - curX);
			if(distanceX != 0){				
				curX = newX;
				curSzLn.style.posLeft += distanceX;
				curDragAct = 4;
			}
		}
		else{
			EndColumnSizing();
		}
	}
}

function OnTMUp(){
	if(curSzLn != null){	
		if(curDragAct == 4)
			__doPostBack(replaceDblColon(curGridName), "RESIZECOLUMN:CH:" + curRszHdr.columnIndex + ":" + (curX - curRszHdr.x - curRszHdr.width));
		EndColumnSizing();
	}
}

function OnHMMove(){		
	if(curSzLn == null){
		var header = event.srcElement;
		while(header != null && (header.tagName != "TD" || header.id == "" || header.id.indexOf("~CH~") == -1 && header.id.indexOf("~GH~") == -1)){
			header = header.parentElement;
		}
		if(header != null){
			var _indexOf = header.id.indexOf("~");
			if(_indexOf != -1){
				var gridName = header.id.substr(0, _indexOf);		
				var hdrInd = header.id.substr(_indexOf + ("~CH~").length, header.id.length);
				var gridObj = __ASPxGridCollection.Get(gridName);
				if(gridObj != null){
					var clientX = event.clientX + document.body.scrollLeft;
					curRszHdr = gridObj.GetResizingHeaderInfo(header, hdrInd, clientX);
					if(curRszHdr != null){
						event.srcElement.style.cursor = "e-resize";
						curSizing = true;
					}
					else{
						event.srcElement.style.cursor = "default";
						curSizing = false;
					}
				}
			}			
		}
	}
}

function OnGBCl(){	
	var header = event.srcElement;
	while(header != null && (header.tagName != "TD" || header.id == "")){
		header = header.parentElement;
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

function OnHMDown(){	
	var header = event.srcElement;
	while(header != null && (header.tagName != "TD" || header.id == "")){
		header = header.parentElement;
	}
	if(header.id.indexOf("~CH~") != -1 || header.id.indexOf("~GH~") != -1 ){
		if(header != null){
			var _indexOf = header.id.indexOf("~");
			if(_indexOf != -1){
				var gridName = header.id.substr(0, _indexOf);		
				var hdrInd = header.id.substr(_indexOf + ("~CH~").length, header.id.length);
				var gridObj = __ASPxGridCollection.Get(gridName);
				if(gridObj != null){
					if(curSizing){
						StartColumnSizing(gridName, gridObj, header, hdrInd);
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
							var isGrouped = header.id.indexOf("~GH~") != -1;						
							StartDragHeader(gridName, header, hdrInd, ((isGrouped) ? 10001 : 10000));
							event.srcElement.onmouseup = OnDHMUp;
							event.cancelBubble = true;	
						}
					}	
				}		
			}
		}
	}
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
    curArrUp.style.posLeft = curArrUpX;    
    curArrUp.style.posTop = curArrUpY;
    curArrDown.style.posLeft = curArrDownX;
    curArrDown.style.posTop = curArrDownY;

    curArrUp.style.visibility = "visible";
    curArrDown.style.visibility = "visible";
}

function HideArrows(){
	if(curArrUp != null)
		curArrUp.style.visibility = "hidden";
	if(curArrDown)
		curArrDown.style.visibility = "hidden";
}

function OnDHMMove(gridName){		
	if(curDragEl != null && curEnblHdrDrag){
		var header;
		header = curDragEl;				
		if(curDragAct == 10000)
			curDragAct = 2;
		if(curDragAct == 10001)
			curDragAct = 3;
		newX = (event.clientX + document.body.scrollLeft);
		newY = (event.clientY + document.body.scrollTop);
		distanceX = (newX - curX);
		distanceY = (newY - curY);
		curX = newX;
		curY = newY;

		header.style.pixelLeft += distanceX;
		header.style.pixelTop += distanceY;    

		var gridObj = __ASPxGridCollection.Get(curGridName);
		curTargetHdr = null;
		if(gridObj != null && curDragAct == 2 && curEnblClmnMove || curDragAct == 3 && curEnblGroup)
			curTargetHdr = gridObj.GetTargetHeaderInfo(header.offsetLeft + header.offsetWidth / 2, header.offsetTop + header.offsetHeight / 2, curColInd);
		if(curTargetHdr == null && curEnblGroup && gridObj != null)
			curTargetHdr = gridObj.GetTargetGroupedHeaderInfo(header.offsetLeft + header.offsetWidth / 2, header.offsetTop + header.offsetHeight / 2, curColInd);
		if(curShowArr){				
			UpdateArrowsPos(gridObj.arrowImgWidth);				
			if(curTargetHdr == null)
				HideArrows();
			else
				ShowArrows();				
		}
		return false;
	}
	else{
		if(savedDocumentMouseMove != null)
			return savedDocumentMouseMove();
	}
	return true;
}

function OnDHMUp(){	
	try	{			
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
				document.all(curGridName + "ShiftPressed").value = event.shiftKey;
				document.all(curGridName + "CtrlPressed").value = event.ctrlKey;
				__doPostBack(replaceDblColon(curGridName), "SORT:CH:" + curColInd + ":0");
			}
		}		
		EndColumnDragging();
	}
	catch(e){
	}	
}

function OnDHMOut(){	
	if(!curEnblHdrDrag &&  curDragEl != null){
		curDragEl.style.visibility = "hidden";
		ClearDragState();
	}
}

function OnEBCl(){		
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);		
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null && gridObj.rowsExpanded != null && gridObj.controlMode == "Browse")
				gridObj.ProcessExpBtn(button);	
			else
				__doPostBack(replaceDblColon(gridName), "EXPAND:EB:" + button.id + ":0");
		}
	}
}

function OnRBNoneCl(){
	event.cancelBubble = true;	
}

function OnRBInsCl(){
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);			
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null && !gridObj.readOnly && gridObj.allowInsert)
				__doPostBack(replaceDblColon(gridName), "INSERT:RB:" + button.id + ":0");
		}
	}
}

function OnRBEditCl(){
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);			
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null && !gridObj.readOnly && gridObj.allowEdit)
				__doPostBack(replaceDblColon(gridName), "STARTEDIT:RB:" + button.id + ":0");
		}
	}
}

function OnRBCancelCl(){
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);			
			__doPostBack(replaceDblColon(gridName), "CANCELEDIT:RB:0:0");
		}
	}
}

function DoDeleteRow(gridName, rowId){
	CheckPageSizeEdit(gridName);		
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && gridObj.allowDelete){		
		if(!gridObj.confirmDelete || confirm(gridObj.confirmDeleteMessage))
			__doPostBack(replaceDblColon(gridName), "DELETE:" + (rowId != "-1" ? "RB" : "NB") + ":" + rowId + ":0");
	}
}

function OnRBDelCl(){	
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);			
			DoDeleteRow(gridName, button.id);
		}
	}
}

function OnRBOkCl(){
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);	
			__doPostBack(replaceDblColon(gridName), "POSTEDIT:RB:0:0");
		}
	}
}

function OnRBMoveToCl(){		
	event.cancelBubble = true;	
	var button = event.srcElement;
	while(button != null && (button.tagName != "TD" || button.id == "")){
		button = button.parentElement;
	}	
	if(button != null){
		var _indexOf = button.id.indexOf("~");	
		if(_indexOf != -1){
			var gridName = button.id.substr(0, _indexOf);
			CheckPageSizeEdit(gridName);			
			var gridObj = __ASPxGridCollection.Get(gridName);
			var rowId = button.id.substr(_indexOf + ("~LI~").length, button.id.length);			
			var tr = document.all(gridName + "~TR~" + rowId);						
			if(tr == null)				
				tr = document.all(gridName + "~GTR~" + rowId);				
			if(tr != null && !(document.all(gridName + "State").value == "Edit" && document.all(gridName + "FocusedRow").value == tr.id)){				
				if(gridObj != null && !gridObj.postBackOnFocusedChanged && document.all(gridName + "State").value != "Edit")
					gridObj.MoveTo(tr);
				else
					__doPostBack(replaceDblColon(gridName), "MOVETO:RB:" + tr.id + ":0");
			}
		}
	}
}

function GetRowID(tr){
	var isGroupRow = tr.id.indexOf("~GTR~") != -1;
	var rowId = ((isGroupRow) ? tr.id.substr(tr.id.indexOf("~") + ("~GTR~").length, tr.id.length) : tr.id.substr(tr.id.indexOf("~") + ("~TR~").length, tr.id.length));
	return rowId;
}

function OnTRCl(){
	var td;
	td = event.srcElement;
	if(td.tagName!="TD")
		td=td.parentElement;
	var tr;
	tr = td.parentElement;	
	var _indexOf = tr.id.indexOf("~");
	if(_indexOf != -1){
		var gridName = tr.id.substr(0, _indexOf);		
		CheckPageSizeEdit(gridName);
		var gridObj = __ASPxGridCollection.Get(gridName);		
		if(gridObj != null){
			try{				
				if(!(document.all(gridName + "State").value == "Edit" && document.all(gridName + "FocusedRow").value == tr.id)){
					if(document.all(gridName + "State").value == "Edit"){
						__doPostBack(replaceDblColon(gridName), "MOVETO:RR:" + tr.id + ":0");
						return;
					}					
					var isGroupRow = tr.id.indexOf("~GTR~") != -1;					
					if(document.all(gridName + "FocusedRow").value == tr.id){					
						if(gridObj.postBackOnRowDblClick){
							if(isGroupRow){
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
			}
			catch(e){
			}	
		}
	}
}

function MoveBy(gridName, direction){				
	CheckPageSizeEdit(gridName);
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && document.all(gridName + "State").value != "Edit" && !gridObj.postBackOnFocusedChanged){
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
}

function OnNBPrevPageCl(gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "PREVPAGE:" + btnType + ":0:0");
}

function OnNBPrevCl(gridName){
	MoveBy(gridName, false);	
}

function OnNBNextCl(gridName){
	MoveBy(gridName, true);	
}

function OnNBNextPageCl(gridName, btnType){	
	__doPostBack(replaceDblColon(gridName), "NEXTPAGE:" + btnType + ":0:0");
}

function OnNBLastCl(gridName){
	__doPostBack(replaceDblColon(gridName), "LAST:NB:0:0");
}

function CancelPageSize(gridName, cancel){
	try	{		
		var gridObj = __ASPxGridCollection.Get(gridName);
		if(gridObj != null){
			gridObj.CancelPageSize(cancel);		
		}
		document.all(gridName + "State").value = "";
	}
	catch(e){
	}	
}

function ApplyPageSize(gridName){
	var reg = /^[0-9]+$/;
	if(!reg.test(document.all(gridName + "PageSizeEdit").value))
		alert("The size of page must be an integer number");
	else
		__doPostBack(replaceDblColon(gridName), "CHANGEPAGESIZE:NB:" + document.all(gridName + "PageSizeEdit").value + ":0");
}

function CheckPageSizeEdit(gridName){
	if(document.all(gridName + "State").value == "ChangingPageSize")
		CancelPageSize(gridName, true);
}

function OnNBChPSCl(gridName){
	try	{				
		if(document.all(gridName + "State").value == "ChangingPageSize"){
			ApplyPageSize(gridName);
		}
		else{			
			var gridObj = __ASPxGridCollection.Get(gridName);
			if(gridObj != null){
				gridObj.EditPageSize(event.srcElement);
				document.all(gridName + "State").value = "ChangingPageSize";
			}
		}
	}
	catch(e){
	}
}

function OnEChPgSzKPrs(gridName){
	if(event.keyCode == 27)
		CancelPageSize(gridName, true);
	if(event.keyCode == 13)
		ApplyPageSize(gridName);	
}

function OnNBInsCl(gridName){		
	var gridObj = __ASPxGridCollection.Get(gridName);
	if(gridObj != null && !gridObj.readOnly && gridObj.allowInsert)
		__doPostBack(replaceDblColon(gridName), "INSERT:NB:-1:0");
}

function OnNBEditCl(gridName){		
	var gridObj = __ASPxGridCollection.Get(gridName);		
	if(gridObj != null && !gridObj.readOnly && gridObj.allowEdit)
		__doPostBack(replaceDblColon(gridName), "STARTEDIT:NB:-1:0");
}

function OnNBDelCl(gridName){
	DoDeleteRow(gridName, "-1");	
}

function OnNBRefreshCl(gridName){
	__doPostBack(replaceDblColon(gridName), "REFRESH:NB:0:0");
}

function OnNBOkCl(gridName){
	__doPostBack(replaceDblColon(gridName), "POSTEDIT:NB:0:0");
}

function OnNBCancelCl(gridName){
	__doPostBack(replaceDblColon(gridName), "CANCELEDIT:NB:0:0");
}

function OnEGoToPgKPrs(gridName, btnType){
	if(event.keyCode == 13)
		OnPBGoToPageCl(gridName, btnType);
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
	var scrollLeftInput = document.all(gridName + "ScrollLeft");
	if(scrollLeftInput != null)
		scrollLeftInput.value = document.all(gridName + "scroller").scrollLeft;
	var scrollTopInput = document.all(gridName + "ScrollTop");
	if(scrollTopInput != null)
		scrollTopInput.value = document.all(gridName + "scroller").scrollTop;
}

var savedDocumentMouseMoveAssigned;
if(!savedDocumentMouseMoveAssigned){
	savedDocumentMouseMoveAssigned = true;
	savedDocumentMouseMove = document.onmousemove;
	document.onmousemove = OnDHMMove;
}
else{
	if(__ASPxGridCollection != null)
		__ASPxGridCollection.Clear();
}
ClearDragState();
ClearColumnSizingState();
