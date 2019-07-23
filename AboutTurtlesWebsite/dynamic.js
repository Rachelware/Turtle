alert("alerting you of an alert that requires alert");

function picChange(){
	//alert(document.getElementById("turtle").src);
	if (document.getElementById("turtle").src == "https://rachelware.github.io/Turtle/turtle1.png"){
		document.getElementById("turtle").src = "turtle3.png";
	}
	else if (document.getElementById("turtle").src == "https://rachelware.github.io/Turtle/turtle2.png"){
		document.getElementById("turtle").src = "turtle1.png";
	}
	else{
		document.getElementById("turtle").src = "turtle2.png";
	}
}
