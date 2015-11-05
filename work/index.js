

var message = new Array();
var selector = new Array(); 
selector["hello"] = ["continue","nyanpasu"]
message["hello"] = ["this is first","this is second"]

var cnt = 0;
function clicked(){
	if(cnt == message["hello"].length){
		document.getElementById("message").textContent = "this is last content";
		for(var i = 0 ; i < selector["hello"].length ; i ++){
			var btn = "btn" + i;
			document.getElementById(btn).textContent = selector["hello"][i];
			document.getElementById(btn).style.backgroundColor = "red";	
		}
		for(var i = selector["hello"].lenght ; i < 4 ; i ++){
			var btn = "btn" + i;
			document.getElementById(btn).textContent = "";
			document.getElementById(btn).style.backgroundColor = "white";	
		}
		return ;
	}
	document.getElementById("message").textContent = message["hello"][cnt++];
	console.log("moved");
}