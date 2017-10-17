var button = document.querySelectorAll("button")[0];
var inputs = document.querySelectorAll("input");
// var oneInp = document.querySelector("#text1");
// var twoInp = document.querySelector("#text2");
// var threeInp = document.querySelector("#text3");
// var fourInp = document.querySelector("#text4");

var nName = document.querySelectorAll('[name="F-name"], [name="L-name"], [name="email"], [name="phone"]');

// function cFind() {


// for (var i=0; i< nName.length; i++) {
//   if (nName[i].value.trim() === "") {
//     alert('Поле ' + nName[i].name + " is empty!")
//   } else {
//   	alert("Відправлено")

//    }
//   }
// }


function save() {
	for (var i = 0; i < nName.length; i++) {
		var value = nName[i].value.trim();
		var fName = nName[i].name;
		if (value === "") {
			alert('Поле ' + nName[i].name + " is empty!")	
		} else {
			alert("Відправлено "+ nName[i].name )
			localStorage.setItem(fName, value);
		}

	}
}









