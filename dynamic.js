alert("alerting you of an alert that requires alert");

function picChange(){
	//alert(document.getElementById("turtle").src);
	if (document.getElementById("turtle").src == "turtle1.png"){
		document.getElementById("turtle").src = "turtle3.png";
		alert("aap" + document.getElementById("turtle").src);
	}
	else if (document.getElementById("turtle").src == "turtle2.png"){
		document.getElementById("turtle").src = "turtle1.png";
		alert("oop" + document.getElementById("turtle").src);
	}
	else{
		document.getElementById("turtle").src = "turtle2.png";
		alert("eep" + document.getElementById("turtle").src);
	}
}
