alert("alerting you of an alert that requires alert");

function picChange(){
	//alert(document.getElementById("turtle").src);
	if (document.getElementById("turtle").src == "file:///C:/Users/Rachel%20Ware/Desktop/Turtle%20website/turtle1.png"){
		document.getElementById("turtle").src = "turtle3.png";
	}
	else if (document.getElementById("turtle").src == "file:///C:/Users/Rachel%20Ware/Desktop/Turtle%20website/turtle2.png"){
		document.getElementById("turtle").src = "turtle1.png";
	}
	else{
		document.getElementById("turtle").src = "turtle2.png";
	}
}
