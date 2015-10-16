var panelCntr = 0;
var panelPath = "../panels/";
var synced=false;



//------------panel communication router---------------
function router(event){
	if(event.data.action){
		switch (event.data.action){
			case "addToSync":
				addToSync(event);	
			break;
			case "callFunctionInPanel":
				callFunctionInPanel(event);	
			break;
			case "expandPanel":
				expand(event);
			break;
			case "collapsePanel":
				collapse(event);
			break;
		}
	}
}




//------------calls from panels---------------
function addToSync(event){
	if(synced)return;
	panelCntr++;
	var container = document.getElementById("container");
	if(panelCntr==container.children.length){
		synced=true;
		for(i=0; i<panelCntr; i++){
			var panel = container.children[i];	
			panel.contentWindow.postMessage({action:"synced"}, "*");
		}
	}
}



function callFunctionInPanel(event){
	var targetPanel = document.getElementById(event.data.target);
	if(targetPanel)targetPanel.contentWindow.postMessage(event.data, "*");	
}


function expand(event){
	var panelName=event.data.params[0];
	var interactionType = event.data.params[1];
	var iframe=document.createElement("iframe");
	var container = document.getElementById("container");

	iframe.id=panelName;
	iframe.className="panel";
	iframe.src=panelPath+panelName+".html";
	container.appendChild(iframe);
}


function collapse(event){
	var panelName=event.data.params[0];
	var interactionType = event.data.params[1];
	var iframe=document.getElementById(panelName);
	var container = document.getElementById("container");
	container.removeChild(iframe);
}





//-------------calls from main----------------
function expandPanel(panelName, interactionType){
	var expandData = new Object();
	expandData.params=[panelName, interactionType];
	expand({data:expandData});
}


function collapsePanel(panelName, interactionType){
	var expandData = new Object();
	expandData.params=[panelName, interactionType];
	expand({data:expandData});
}




//------------------listener-------------------
window.addEventListener("message", router, false);