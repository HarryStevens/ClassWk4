/**
 * @author Hazard
 */


function pageLoaded(){
	
	//jQuery div
	var myjQDiv = $("<div>");
	$(myjQDiv).html("This is my jQuery div");
	$("#contentContainer").append(myjQDiv);
	
	
	
	
}


$(document).ready(pageLoaded);

console.log("scripts js file loaded");
