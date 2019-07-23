function displayDate() {
    document.getElementById("time").innerHTML = Date();
}

function changePicture() {
    var newPic = '<p><h3><em>I like turtles!</em></h2></p> <img class="image" src="https://www.seaturtles911.org/image/green-seaturtle-6.jpg" alt="A picture of a cooler turtle" ></img>';
    document.getElementById("pictures").innerHTML = newPic;
}
