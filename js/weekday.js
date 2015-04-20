$(function(){
	now  = new Date();
	$("#week td:nth-child("+(now.getDay()+1)+")").addClass("hover");
})
