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

var ctrlKey = 2;
var shiftKey = 4;

function InitializeEnableFlags(){
	curEnblHdrClick = true;
	curEnblHdrDrag = true;
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

function getLayer(layerName){
    for(i = 0; i < document.layers.length; i ++){
        if (document.layers[i].name.indexOf(layerName) != -1){
            return document.layers[i];
        }
    }
    return null;
}

function getImg(imgName){
	for(i = 0; i < document.images.length; i ++){
		if(document.images[i].name == imgName)
			return document.images[i];
	}
	return null;
}

function getElement(elementName){
	for(i = 0; i < document.forms.length; i ++){
		for(j = 0; j < document.forms[i].elements.length; j ++){
			if(document.forms[i].elements[j].name == elementName)
				return document.forms[i].elements[j];
		}
	}
	return null;
}

function CheckInPanel(gridName, prefix, left, top){	
	var imgLT = getImg(gridName + prefix + "LT");
	var imgRB = getImg(gridName + prefix + "RB");
	if(imgLT != null && imgRB != null)
		return left > imgLT.x && left < imgRB.x && top > imgLT.y && top < imgRB.y; 
	return false;
}

function OnGBCl(gridName, headerIndex, isGrouped){
	__doPostBack(replaceDblColon(gridName), (!isGrouped ? "GROUP" : "UNGROUP") + ":GB:" + headerIndex + ":-1");
}

function OnHMDown(evt, gridName, headerIndex, isGrouped){
	InitializeEnableFlags();
	curEnblHdrClick = getElement(gridName + "Column" + headerIndex + "DisableHeaderClick") == null;
	curEnblHdrDrag = getElement(gridName + "Column" + headerIndex + "DisableHeaderDragging") == null;
	if(curEnblHdrClick || curEnblHdrDrag){
		dragEl = getLayer(gridName + "~DH~" + headerIndex);    
		dragEl.visibility = "visible";
		dragEl.x = evt.target.x;
		dragEl.y = evt.target.y;
		dragEl.offX = evt.pageX - dragEl.pageX;
		dragEl.offY = evt.pageY - dragEl.pageY;    
		dragEl.gridName = gridName;
		dragEl.headerIndex = headerIndex;    
		dragEl.isGrouped = isGrouped;    
		dragEl.savemousemove = window.onmousemove;
		dragEl.savemouseup = window.onmouseup;    
		window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);            
		window.onmousemove = OnDHMMove;    
		window.onmouseup = OnDHMUp;            
		_dragged_current = dragEl;    
		_dragged = false;
		return false;
    }
}

function OnDHMMove(evt){	
	if(curEnblHdrDrag){
		var that = _dragged_current;
		if(that.x != evt.pageX - that.offX || that.y != evt.pageY - that.offY){
			that.x = evt.pageX - that.offX;
			that.y = evt.pageY - that.offY;
			_dragged = true;
		}
	}
    return false;
}

function OnDHMUp(evt){		
    var that = _dragged_current;    
    window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);        
    window.onmousemove = that.savemousemove;
    window.onmouseup = that.savemouseup;
    that.visibility = "hidden";
    if(_dragged){
		var prefix;
		var action;		
		if(that.isGrouped){
			prefix = "HP";
			action = "UNGROUP";
		}
		else{
			prefix = "GP";
			action = "GROUP";
		}
		if(CheckInPanel(that.gridName, prefix, that.x, that.y))
			__doPostBack(replaceDblColon(that.gridName), action + ":CH:" + dragEl.headerIndex + ":-1");
	}
	else{
		if(curEnblHdrClick){
			getElement(that.gridName + "ShiftPressed").value = evt.modifiers & shiftKey ? "true" : "false";
			getElement(that.gridName + "CtrlPressed").value = evt.modifiers & ctrlKey ? "true" : "false";
			__doPostBack(replaceDblColon(that.gridName), "SORT:CH:" + dragEl.headerIndex + ":-1");
		}
	}	
    return true;
}

function OnEBCl(grid, row){
	__doPostBack(replaceDblColon(grid), "EXPAND:EB:" + row + ":0");
}

function OnRBInsCl(gridName, row){
	__doPostBack(replaceDblColon(gridName), "INSERT:RB" + row + ":0");
}

function OnRBCancelCl(gridName){
	__doPostBack(replaceDblColon(gridName), "CANCELEDIT:RB:0:0");
}

function OnRBEditCl(gridName, row){
	__doPostBack(replaceDblColon(gridName), "STARTEDIT:RB:" + row + ":0");
}

function DoDeleteRow(gridName, rowId){
	var confirmDelete = getElement(gridName + "ConfirmDelete").value == "true";
	var confirmDeleteMessage;
	if(confirmDelete)
		confirmDeleteMessage = getElement(gridName + "ConfirmDeleteMessage").value;
	if(!confirmDelete || confirm(confirmDeleteMessage))
		__doPostBack(replaceDblColon(gridName), "DELETE:" + (rowId == "-1" ? "NB" : "RB") + ":" + rowId + ":0");
}

function OnRBDelCl(gridName, row){
	DoDeleteRow(gridName, row);
}

function OnRBOkCl(gridName){
	__doPostBack(replaceDblColon(gridName), "POSTEDIT:RB:0:0");
}

function OnRBMoveToCl(gridName, rowId){
	__doPostBack(replaceDblColon(gridName), "MOVETO:RB:" + rowId + ":0");
}

function OnNBFirstCl(gridName)
{
	__doPostBack(replaceDblColon(gridName), "FIRST:NB:0:0");
}

function OnNBPrevPageCl(gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "PREVPAGE:" + btnType + ":0:0");
}

function OnNBPrevCl(gridName){
	__doPostBack(replaceDblColon(gridName), "PREV:NB:0:0");
}

function OnNBNextCl(gridName){
	__doPostBack(replaceDblColon(gridName), "NEXT:NB:0:0");
}

function OnNBNextPageCl(gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "NEXTPAGE:" + btnType + ":0:0");
}

function OnNBLastCl(gridName){
	__doPostBack(replaceDblColon(gridName), "LAST:NB:0:0");
}

function OnNBInsCl(gridName){
	__doPostBack(replaceDblColon(gridName), "INSERT:NB:-1:0");
}

function OnNBEditCl(gridName){
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

function OnNBChPSCl(gridName){
	__doPostBack(replaceDblColon(gridName), "CHANGEPAGESIZE:NB:0:0");	
}

function OnPBGoToPageCl(gridName, btnType){	
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:" + btnType + ":" + getElement(gridName + btnType + "GoToPageEdit").value + ":0");
}

function OnPBGoToPageIndCl(gridName, pageIndex){	
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:PI:" + pageIndex + ":0");
	return false;
}

function OnPBSelPgCh(select, gridName, btnType){
	__doPostBack(replaceDblColon(gridName), "GOTOPAGE:" + btnType + ":" + select.options[select.selectedIndex].value + ":0");
}