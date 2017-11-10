let move = 0;
let number;
//let wrapper = document.createElement('div');
//wrapper.classList.add('wrapper');

temp = 0;
width = wrapper.clientWidth;




document.addEventListener('DOMContentLoaded', function() {
	let slide = document.querySelector('*[data-slide]');
	if (!slide) return;
	number = slide.getAttribute('data-slide');
	// Задел на будущее...
});

wrapper.onmousedown = function(event) {
	let beginCoords = event.clientX;
	document.querySelector('.slider').style.transition = "0s all";
	wrapper.onmousemove = function(event) {
		let moveCoords = beginCoords - event.clientX;
		difference = -moveCoords + temp;
		//document.querySelector('.coords').textContent = 'X : ' + event.clientX + ' Y : ' + event.clientY;
		CheckAndTranslate();					
	}

	function newCoords() {			
			koef = difference/width;
			difference = Math.round(koef) * width;
	};

	function criterion() {
		if (difference > 0 || difference < -width*9) {
			
			if (difference > 0) {
				difference = 0;
				
			}
			if (difference < -width*9) {
				difference = -width*9;
			}
		} 
	};

	function translate() {
		document.querySelector('.slider').style.transform = 'translateX(' + difference + 'px)';	
	};

	function CheckAndTranslate() {
		criterion();
	 	translate();
	};

	document.onmouseup = function() {  	
	    wrapper.onmousemove = document.onmouseup = null;
	    newCoords();
	    temp = difference;
	    document.querySelector('.slider').style.transition = "0.5s all";
	    translate();
	}

	return false;
};

	document.ondragstart = function() {
	  return false;
	};

	function interval() {
		document.querySelector('.slider').style.transition = "0.5s all";
		setInterval(moving, 3000);
	};