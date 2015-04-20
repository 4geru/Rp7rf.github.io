$("td").mouseover(function(){
	console.log("helo");
    $("td:nth-child("+($("td").index(this)%$("th").size()+1)+")").addClass("hover");
}).mouseout(function(){
    $("td:nth-child("+($("td").index(this)%$("th").size()+1)+")").removeClass("hover");
});
