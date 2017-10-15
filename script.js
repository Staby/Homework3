var button = document.querySelectorAll("button")[0];
var inputs = document.querySelectorAll("input");
var oneInp = document.querySelector("#text1");
var twoInp = document.querySelector("#text2");
var threeInp = document.querySelector("#text3");
var fourInp = document.querySelector("#text4");

function cFind() {
var empty = 0;

for(i = 0; i < inputs.length; i++) {

	
	if(inputs[i].value.trim() =="") {
		empty = 1;
}
	}

		if (oneInp.value.trim() == "") {
			alert("Ви не заповнили поле F-name");
		}
		if (twoInp.value.trim() =="") {
			alert("Ви не заповнили поле L-name");
		}
		if (threeInp.value.trim() =="") {
			alert("Ви не заповнили поле Email Address");
		}
		if (fourInp.value.trim() =="") {
			alert("Ви не заповнили поле Phone");
		}


}

var elements = document.querySelectorAll('input, textarea');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
 (function(element) {
   var id = element.getAttribute('id');
   element.value = localStorage.getItem(id); 
   element.oninput = function() {
     localStorage.setItem(id, element.value);
     checkValidity();
   };
 })(elements[i]);
}






