

// -------------------------------------- DECLARATION ------------------------------------------



var button = document.getElementById("enter");
var button2 = document.getElementById("enter2");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); 
var listItem = document.getElementsByTagName("li");
var el = document.getElementsByClassName("Terminate");
var input2 = document.getElementById("userinput2");
var blocItem = document.getElementsByClassName("info2");



// ---------------------------------------- FUNCTIONS ---------------------------------------------


// Checked Items 

function Checked(ev){

	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle("done");
		var descrp = ev.target.nextElementSibling;
		descrp.classList.toggle("done");
		descrp.parentNode.classList.add("active");	
	}
}


//Clear Checked Items

var elDone = document.getElementsByClassName("active")

function Clear(){
	console.log(elDone);
	document.querySelectorAll('.active').forEach(e => e.remove());	
}



//Trash Icons (predifined list)

for(i=0; i<blocItem.length; i++){ 
	var Xbtn = document.createElement("button"); 
	var Icon = document.createElement("i")
	Icon.classList.add('fas', 'fa-trash', 'fa-2x');
	blocItem[i].appendChild(Xbtn);
	Xbtn.appendChild(Icon);
	Xbtn.className = "Terminate";

}



//Into ze trash Action (predifined list)
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function(e) { 
    e.currentTarget.parentNode.remove(); // 

  }, false);
}


//Length of written value into input

function inputLength(){
	return input.value.length; 
}



//Create a div with a list item + Description + Trash Icon. 

function createListElement(){

		//DIV
		var div = document.createElement("div");
		ul.appendChild(div); 
		div.className = "Info"


		//List Item
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); 
		div.appendChild(li); 
		input.value = "";


		//Description
		
		var span = document.createElement("span");
		span.appendChild(document.createTextNode(input2.value ));
		div.appendChild(span);
		input2.value = "";

		//Trash Icon

		var Xbtn = document.createElement("button"); 
		var Icon = document.createElement("i")
		Icon.classList.add('fas', 'fa-trash', 'fa-2x');
		Xbtn.appendChild(Icon);
		div.appendChild(Xbtn); 
		Xbtn.className = "Terminate"; 

		// Into ze trash Action

		for (var i = 0; i < el.length; i++) {
  		el[i].addEventListener('click', function(e) { 
    	e.currentTarget.parentNode.remove();

 	 	}, false);
	}

}

//Click

function addListAfterClick(){
	if(inputLength() > 0){
	createListElement();
	console.log("click");
	}
	else if(inputLength() < 1){
		console.log("not working")
		alert("You forgot to add a list element!")

	}
}

//Enter (keyboard)

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.key === "Enter"){
		createListElement();
	}
		else if(inputLength() < 1 && event.key === "Enter"){
		console.log("not working")
		alert("You forgot to add a list element!")

	}
}



// ---------------------------------------- RUN IT ---------------------------------------------


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
input2.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", Checked);
























