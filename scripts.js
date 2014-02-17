/**
 * @author Hazard
 */


function addJSONToPage(jsonData){
	//console log my data
	console.log(jsonData);
	//create a new div to jQuery
	var myDataDiv = $("<div>");
	//add data to div
	$(myDataDiv).html(jsonData.observations[0].value);
	//add new div to page
	$("#contentContainer").append(myDataDiv);	
}

function pageLoaded(){
	
	//jQuery div
	var myjQDiv = $("<div>");
	$(myjQDiv).html("This is my jQuery div");
	$("#contentContainer").append(myjQDiv);
	
	//first parameter/argument is the file
	//second is the function to pass that data to
	//third is the data format
	$.get("UNEMP270v_data.json", addJSONToPage, "json");	
	
}


$(document).ready(pageLoaded);

console.log("scripts js file loaded");
