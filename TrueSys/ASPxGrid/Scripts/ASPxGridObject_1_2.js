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

function ASPxGridObject(name){
	this.name = name;	
	this.clientSide = false;	
	this.pageSize = 0;	
	this.rowCount = 0;	
	this.offsetX = 0;
	this.offsetY = 0;
	this.selectedBackColor = "";
	this.selectedForeColor = "";
	this.savedCellsColors = new Array();
	this.columns = new Array();
	this.groupColumns = new Array();
	this.focusedIndex = 0;
	this.firstRowIndex = 0;
	this.focusedTR = null;
	this.selectedRowLevel = -1;
	this.arrowImgWidth = 0;
	this.pageSizeImg = null;
	this.rowsExpanded = null;
	this.firstGroupIndentOffset = 0;
	this.controlMode = "Browse";
	
	this.showGroupPanel = true;
	this.showFooter = false;
	this.showStatusBar = true;
	
	this.showArrowsOnDragging = true;
	this.postBackOnFocusedChanged = false;
	this.postBackOnRowDblClick = true;
	
	this.readOnly = false;
	this.allowInsert = true;
	this.allowEdit = true;
	this.allowDelete = true;
	this.confirmDelete = true;
	this.confirmDeleteMessage = "Delete record?";
	
	this.img1x1 = "";
	this.imgIndicator = "";
	this.imgEBExpand = "";
	this.imgEBCollapse = "";
	this.imgNBOk = "";
	this.imgNBChPS = "";	
	
	this.HideSelection = ASPxGridObject.HideSelection;
	this.ShowSelection = ASPxGridObject.ShowSelection;
	this.MoveTo = ASPxGridObject.MoveTo;
	this.MoveBy = ASPxGridObject.MoveBy;
	this.GetTargetHeaderInfo = ASPxGridObject.GetTargetHeaderInfo;
	this.GetTargetGroupedHeaderInfo = ASPxGridObject.GetTargetGroupedHeaderInfo;
	this.EditPageSize = ASPxGridObject.EditPageSize;
	this.CancelPageSize = ASPxGridObject.CancelPageSize;	
	this.GetColumnByIndex = ASPxGridObject.GetColumnByIndex;	
	this.GetRowsHeight = ASPxGridObject.GetRowsHeight;	
	this.GetResizingHeaderInfo = ASPxGridObject.GetResizingHeaderInfo;
	this.ProcessExpBtn = ASPxGridObject.ProcessExpBtn;
	this.ProcessExpTR = ASPxGridObject.ProcessExpTR;
	this.GetRowLevel = ASPxGridObject.GetRowLevel;	
	this.FillExpandedInput = ASPxGridObject.FillExpandedInput;		
	this.SetChildrenVisible = ASPxGridObject.SetChildrenVisible;			
}

function CellColor(foreColor, backColor){
	this.foreColor = foreColor;
	this.backColor = backColor;
}

function ASPxGridColumn(index, type, minWidth, enableHeaderClick, enableHeaderDragging, enableGrouping, enableColumnMoving, enableColumnSizing){
	this.index = index;
	this.type = type;
	this.minWidth = minWidth;
	
	this.enableHeaderClick = enableHeaderClick;
	this.enableHeaderDragging = enableHeaderDragging;
	this.enableGrouping = enableGrouping;
	this.enableColumnMoving = enableColumnMoving;		
	this.enableColumnSizing = enableColumnSizing;
}

ASPxGridObject.SetIndicatorFocused = function(td){
	var img = td.firstChild.rows[0].cells[0].firstChild;
	if(img != null && img.tagName == "IMG")
		img.src = this.imgIndicator;
}

ASPxGridObject.SetIndicatorUnfocused = function(td){
	var img = td.firstChild.rows[0].cells[0].firstChild;
	if(img != null && img.tagName == "IMG")
		img.src = this.img1x1;
}

ASPxGridObject.HideSelection = function(tr){	
	if(this.columns[0].type == "IndicatorColumn")			
		this.SetIndicatorUnfocused(tr.cells[0]);		
		
	if(this.selectedRowLevel < this.groupColumns.length){
		var offset = 1;
		while(this.columns[this.columns.length - offset].type == "RowBtnColumn")
			offset ++;
		tr.cells[tr.cells.length - offset].style.color = this.savedCellsColors[0].foreColor;
		tr.cells[tr.cells.length - offset].style.backgroundColor = this.savedCellsColors[0].backColor;		
	}
	else{		
		var dataColumnIndex = 0;
		for(var i = 0; i < this.columns.length; i ++){
			if(this.columns[i].type == "DataColumn" || this.columns[i].type == "TemplateColumn"){
				tr.cells[i].style.color = this.savedCellsColors[dataColumnIndex].foreColor;
				tr.cells[i].style.backgroundColor = this.savedCellsColors[dataColumnIndex].backColor;
				dataColumnIndex ++;
			}
		}
	}
	ArrayClear(this.savedCellsColors);
}

function ArrayClear(array){
	while(array.length > 0){
		array.pop();
	}
}

ASPxGridObject.ShowSelection = function(tr){	
	var isGroupRow = tr.id.indexOf("~GTR~") != -1;
	var strVar = isGroupRow ? this.name + "~GTR~" : this.name + "~TR~";
	strVar = tr.id.substring(strVar.length, tr.id.length);
	strVar = strVar.substring(0, strVar.indexOf("~"));
	this.selectedRowLevel = Number(strVar);
	
	if(this.columns[0].type == "IndicatorColumn")			
		this.SetIndicatorFocused(tr.cells[0]);			
	
	if(this.selectedRowLevel < this.groupColumns.length){				
		var offset = 1;
		while(this.columns[this.columns.length - offset].type == "RowBtnColumn")
			offset ++;		
		this.savedCellsColors.push(new CellColor(tr.cells[tr.cells.length - offset].style.color, tr.cells[tr.cells.length - offset].style.backgroundColor));
		tr.cells[tr.cells.length - offset].style.color = this.selectedForeColor;
		tr.cells[tr.cells.length - offset].style.backgroundColor = this.selectedBackColor;
	}
	else{					
		for(var i = 0; i < this.columns.length; i ++){
			if(this.columns[i].type == "DataColumn" || this.columns[i].type == "TemplateColumn"){
				this.savedCellsColors.push(new CellColor(tr.cells[i].style.color, tr.cells[i].style.backgroundColor));
				tr.cells[i].style.color = this.selectedForeColor;
				tr.cells[i].style.backgroundColor = this.selectedBackColor;
			}	
		}
	}	
	var scroller = document.getElementById(this.name + "scroller");
	if(scroller != null && tr.offsetTop + tr.offsetHeight > scroller.scrollTop + scroller.clientHeight)
		scroller.scrollTop = tr.offsetTop + tr.offsetHeight - scroller.clientHeight;
	if(scroller != null && tr.offsetTop < scroller.scrollTop)
		scroller.scrollTop = tr.offsetTop;
}

function ArrayIndexOf(array, item){
	for(var i = 0; i < array.length; i ++){
		if(array[i] == item)
			return i;
	}
	return -1;
}

ASPxGridObject.MoveTo = function(tr){				
	if(tr != this.focusedTR){		
		if(this.focusedTR != null)
			this.HideSelection(this.focusedTR);			
		this.focusedTR = tr;	
		this.focusedIndex = ArrayIndexOf(tr.parentNode.childNodes, tr);		
		if(this.focusedTR != null){
			this.ShowSelection(this.focusedTR);		
			document.getElementById(this.name + "FocusedRow").value = this.focusedTR.id;
		}
		else
			document.getElementById(this.name + "FocusedRow").value = "";
	}		
}

ASPxGridObject.GetTargetHeaderInfo = function(x, y, currentColIndex){			
	var headerpanel = document.getElementById(this.name + "headerpanel");	
	if(headerpanel != null){
		var headerpanelX = AbsoluteX(headerpanel, this.name, false, true);		
		var headerpanelY = AbsoluteY(headerpanel, this.name, false);				
		if(x > headerpanelX && x < headerpanelX + headerpanel.offsetWidth && y > headerpanelY && y < headerpanelY + headerpanel.offsetHeight){
			var targetIndex = 0;			
			var headerIndex = 0;			
			for(var i = 0; i < this.columns.length; i ++){
				if(this.columns[i].type != "" && this.columns[i].type != "IndentColumn"){
					var header = headerpanel.cells[headerIndex];
					if(header != null){
						var headerX = AbsoluteX(header, this.name, false, true);
						if(x > headerX && x < headerX + header.offsetWidth){
							var before = x <= headerX + header.offsetWidth / 2;
							var targetX = header.offsetLeft + (before ? 0 : header.offsetWidth)
							var scroller = document.getElementById(this.name + "scroller");	
							if((this.columns[i].type == "DataColumn" || this.columns[i].type == "TemplateColumn") && (scroller == null || scroller.scrollLeft == null || targetX > scroller.scrollLeft && targetX < scroller.scrollLeft + scroller.offsetWidth)){
								var targetHeaderInfo = new Object();							
								targetHeaderInfo.x = headerX + (before ? 0 : header.offsetWidth);
								targetHeaderInfo.y = AbsoluteY(header, this.name, false);
								targetHeaderInfo.height = header.offsetHeight;
								targetHeaderInfo.columnIndex = this.columns[i].index;							
								targetHeaderInfo.targetIndex = before ? targetIndex : targetIndex + 1;
								targetHeaderInfo.inGroupingPanel = false;
								return targetHeaderInfo;
							}
							else
								return null;
						}
						else{
							if((this.columns[i].type == "DataColumn" || this.columns[i].type == "TemplateColumn" || this.columns[i].type == "RowBtnColumn") && this.columns[i].index != currentColIndex)
								targetIndex++;							
						}
					}
					headerIndex ++;
				}
			}
		}
	}
	return null;
}

ASPxGridObject.GetTargetGroupedHeaderInfo = function(x, y, currentColIndex){	
	var grouppanel = document.getElementById(this.name + "grouppanel");	
	if(grouppanel != null){		
		var grouppanelX = AbsoluteX(grouppanel, this.name, false, true);
		var grouppanelY = AbsoluteY(grouppanel, this.name, false);
		if(x > grouppanelX && x < grouppanelX + grouppanel.offsetWidth && y > grouppanelY && y < grouppanelY + grouppanel.offsetHeight){
			if(this.groupColumns.length == 0){
				var targetHeaderInfo = new Object();
				targetHeaderInfo.x = grouppanelX;
				targetHeaderInfo.y = grouppanelY;
				targetHeaderInfo.height = grouppanel.offsetHeight;
				targetHeaderInfo.columnIndex = -1;
				targetHeaderInfo.targetIndex = 0;
				targetHeaderInfo.inGroupingPanel = true;
				return targetHeaderInfo;				
			}
			else{					
				var targetIndex = 0;
				var groupHeaders = grouppanel.cells[0].firstChild.rows[0];
				for(var i = 0; i < groupHeaders.cells.length - 1; i ++){					
					var header = groupHeaders.cells[i];
					if(header != null){
						var headerX = AbsoluteX(header, this.name, false, true);
						if((x > headerX && x < headerX + header.offsetWidth) || (i == groupHeaders.cells.length - 2)){
							if(i == 0){
								i = 1;
								header = groupHeaders.cells[i];
								headerX = AbsoluteX(header, this.name, false, true);
							}							
							var before = x <= headerX + header.offsetWidth / 2;
							var targetHeaderInfo = new Object();
							targetHeaderInfo.x = headerX + (before ? 0 : header.offsetWidth);
							targetHeaderInfo.y = AbsoluteY(header, this.name, false);
							targetHeaderInfo.height = header.offsetHeight;
							targetHeaderInfo.columnIndex = this.groupColumns[i - 1];
							targetHeaderInfo.targetIndex = before ? targetIndex : targetIndex + 1;
							targetHeaderInfo.inGroupingPanel = true;
							return targetHeaderInfo;
						}
						else{
							if(i > 0 && this.groupColumns[i - 1] != currentColIndex)
								targetIndex++;
						}
					}
				}				
			}
		}
	}
	return null;
}

ASPxGridObject.EditPageSize = function(img){	
	var edit;
	edit = document.getElementById(this.name + "PageSizeEdit");				
	edit.disabled = false;
	edit.focus();
	if(img.tagName != "IMG")
		img = img.childNodes[0];
	img.src = this.imgNBOk;	
	this.pageSizeImg = img;
}

ASPxGridObject.CancelPageSize = function(cancel){
	var edit = document.getElementById(this.name + "PageSizeEdit");
	if(cancel)
		edit.value = this.pageSize;
	edit.disabled = true;	
	this.pageSizeImg.src = this.imgNBChPS;
}

ASPxGridObject.MoveBy = function(direction){
	var newtr = null;
	if(document.getElementById(this.name + "FocusedRow").value != -1){			
		var oldFocused = document.getElementById(document.getElementById(this.name + "FocusedRow").value);		
		var maxIndex = (this.pageSize > 0) ? this.pageSize + this.firstRowIndex - 1 : this.rowCount + this.firstRowIndex - 1;
		if(direction && this.focusedIndex < maxIndex)
			newtr = oldFocused.nextSibling;
		if(!direction && this.focusedIndex > this.firstRowIndex)
			newtr = oldFocused.previousSibling;
		if(newtr != null)
			this.MoveTo(newtr);		
	}	
	return (newtr != null) ? newtr.id : "";
}

ASPxGridObject.GetColumnByIndex = function(columnIndex){
	for(var i = 0; i < this.columns.length; i ++){
		if(this.columns[i].index == columnIndex)
			return this.columns[i];
	}
	return null;
}

ASPxGridObject.GetRowsHeight = function(table){
	var startIndex = 0;
	if(this.showGroupPanel)
		startIndex ++;
	var endIndex = table.rows.length;
	if(this.showFooter)
		endIndex --;
	if(this.showStatusBar)
		endIndex --;
	var height = 0;
	if(table != null){		
		for(var i = startIndex; i < endIndex; i ++){
			height += table.rows[i].offsetHeight;
		}
	}	
	return height;
}

ASPxGridObject.GetResizingHeaderInfo = function(header, columnIndex, x){
	var headerAbsoluteX = AbsoluteX(header, this.name, false, false);
	var leftEdge = headerAbsoluteX;
	var rightEdge = headerAbsoluteX + header.offsetWidth;
	if((leftEdge < (x + columnSizingEdge) && leftEdge > (x - columnSizingEdge)) || (rightEdge < (x + columnSizingEdge) && rightEdge > (x - columnSizingEdge))){
		if(leftEdge > (x - columnSizingEdge)){
			columnIndex = -1;
			var headerIndex = ArrayIndexOf(header.parentNode.childNodes, header);
			if(headerIndex > 0){
				header = header.parentNode.childNodes[headerIndex - 1];
				var _indexOf = header.id.indexOf("~");
					if(_indexOf != -1)					
						columnIndex = header.id.substr(_indexOf + ("~CH~").length, header.id.length);
			}
		}		
		if(columnIndex >= 0){
			var column = this.GetColumnByIndex(columnIndex);
			if(column != null && column.enableColumnSizing && (column.type == "DataColumn" || column.type == "TemplateColumn")){
				var resizingHeader = header;
				var resizingHeaderInfo = new Object();
				resizingHeaderInfo.x = AbsoluteX(resizingHeader, this.name, false, true);
				resizingHeaderInfo.width = resizingHeader.offsetWidth;
				resizingHeaderInfo.minWidth = column.minWidth;
				resizingHeaderInfo.columnIndex = column.index;
				return resizingHeaderInfo;
			}
		}
	}	
	return null;
}

ASPxGridObject.GetRowLevel = function(tr){
	var indexOf = tr.id.indexOf("~");
	var substr = tr.id.substr(indexOf + 1, tr.id.length);
	indexOf = substr.indexOf("~");
	substr = substr.substr(indexOf + 1, tr.id.length);
	indexOf = substr.indexOf("~");
	return Number(substr.substr(0, indexOf));	
}

ASPxGridObject.SetButtonExpanded = function(td){
	var img = td.firstChild.rows[0].cells[0].firstChild;
	if(img != null && img.tagName == "IMG")
		img.src = this.imgEBCollapse;
}

ASPxGridObject.SetButtonCollapsed = function(td){
	var img = td.firstChild.rows[0].cells[0].firstChild;
	if(img != null && img.tagName == "IMG")
		img.src = this.imgEBExpand;
}

ASPxGridObject.SetChildrenVisible = function(tr){
	var childrenDisplay = (this.rowsExpanded[ArrayIndexOf(tr.parentNode.childNodes, tr) - this.firstRowIndex] && tr.style.display != "none") ? "" : "none";
	var rowLevel = this.GetRowLevel(tr);
	var childRow = tr.nextSibling;
	var childRowLevel = this.GetRowLevel(childRow);
	while(childRow != null && childRowLevel > rowLevel){
		if(childRowLevel == rowLevel + 1){
			childRow.style.display = childrenDisplay;			
			this.SetChildrenVisible(childRow);
			if(childRow == this.focusedTR && childrenDisplay == "none")
				this.MoveTo(tr);
		}	
		childRow = childRow.nextSibling;
		childRowLevel = this.GetRowLevel(childRow);
	}
}


ASPxGridObject.ProcessExpBtn = function(button){	
	var tr = button.parentNode;
	var rowIndex = ArrayIndexOf(tr.parentNode.childNodes, tr) - this.firstRowIndex;
	this.rowsExpanded[rowIndex] = !this.rowsExpanded[rowIndex];
	this.SetChildrenVisible(tr);	
	if(this.rowsExpanded[rowIndex])
		this.SetButtonExpanded(button);
	else
		this.SetButtonCollapsed(button);
	this.FillExpandedInput(tr.parentNode);
}

ASPxGridObject.ProcessExpTR = function(tr){	
	var rowLevel = this.GetRowLevel(tr);
	this.ProcessExpBtn(tr.childNodes[rowLevel + this.firstGroupIndentOffset]);
}

ASPxGridObject.FillExpandedInput = function(rowsTable){	
	var input = document.getElementById(this.name + "ExpandedRows");	
	if(input != null && rowsTable != null){
		input.value = "";
		for(var i = 0; i < this.rowsExpanded.length; i ++){
			if(this.rowsExpanded[i]){				
				if(input.value != "")
					input.value += ";";
				input.value += rowsTable.childNodes[i + this.firstRowIndex].id;	
			}
		}
	}	
}

ASPxGridCollection.Add = function (gridObject){
	this.gridObjects.push(gridObject);
}

ASPxGridCollection.Get = function (name){
	for(var i = 0; i < this.gridObjects.length; i++){
		if(this.gridObjects[i].name == name) return this.gridObjects[i];
	}
	return null;
}

ASPxGridCollection.Clear = function (){
	while(this.gridObjects.length > 0){
		this.gridObjects.pop();
	}
}

function ASPxGridCollection(){
	this.gridObjects = new Array();
	
	this.Add = ASPxGridCollection.Add;
	this.Get = ASPxGridCollection.Get;
	this.Clear = ASPxGridCollection.Clear;
}

var __ASPxGridCollection;

if(__ASPxGridCollection == null){
	__ASPxGridCollection = new ASPxGridCollection();
}