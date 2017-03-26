function moveHands() {
	with(new Date()) {
		h = 30 * (getHours() % 12 + getMinutes() /60); // 30 degrees hour
		m = 6 * getMinutes(); // 6 degreees every minutes
		s = 6 * getSeconds(); // 6 degrees every second

		// setting the rotate CSS attribute to those degree values -->
		document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
		document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
		document.getElementById('hours').style.cssText = "-webkit-transform: rotate(" + h + ");";

		setTimeout(moveHands, 1000); // call the function every second
	}
}

window.onload = moveHands; // making sure the funcitons tarts on load of webpage