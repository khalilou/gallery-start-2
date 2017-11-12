var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i < 6; i++) {	
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic"+i+".jpg");
  thumbBar.appendChild(newImage);
      newImage.onclick = function(){
        var newImageSrc = this.getAttribute('src');
        displayedImage.src = newImageSrc;
    }
}

/*function change() {
	var newSrc = getAttribute('src');
	console.log(newSrc);
	displayedImage.src = newSrc;
}*/



/* Wiring up the Darken/Lighten button */

function change() {
	btn.childNodes[0].nodeValue= "Dark";
	document.querySelector('.overlay').style.backgroundColor = "grey";
	document.querySelector('.overlay').style.opacity = 0.5;
	var currentText = btn.innerHTML;
	if (currentText == "Dark") {
		btn.innerHTML = "Lighten";
		document.querySelector('.overlay').style.opacity = 0;
	}

}