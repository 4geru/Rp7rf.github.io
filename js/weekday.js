$(function(){
	$("#week td").mouseover(function(){
		$("#week td:nth-child("+($("#week td").index(this)%$("th").size()+1)+")").addClass("hover");
	}).mouseout(function(){
		$("#week td:nth-child("+($("#week td").index(this)%$("th").size()+1)+")").removeClass("hover");
	})
})
