

// ------------- DÉCLARATION --------------
var button = document.getElementById("enter");
var button2 = document.getElementById("enter2");

var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); //  3e étape plus bas. La méthode query selector 
var listItem = document.getElementsByTagName("li");
var el = document.getElementsByClassName("Terminate");
var input2 = document.getElementById("userinput2");
var blocItem = document.getElementsByClassName("info2");





// ------------- FONCTIONS --------------


// When clicked element make a Line-Through 
function Checked(ev){

	if(ev.target.tagName === 'LI') {
		ev.target.classList.toggle("done");
		var descrp = ev.target.nextElementSibling;
		descrp.classList.toggle("done");
		descrp.parentNode.classList.add("active");
		// return true;

	}
}

//TENTATIVE 1: Enlever tous les éléments cochés
//Si le ou les éléments avec la classe done et enfants du DIV sont cochés effacés tous ces éléments

// function Del(){
// 	var element = document.getElementsByTagName("li");
// 	var laMerde = document.querySelector(".info2", ".Info")

	
// 	for(i=0; i<element.length; i++)
// 	if (element[i].classList.contains("done")) {
// 		laMerde.remove()
		
// 		console.log("yes it does")
// 	 return true;
// 	} 
// 	return false;
// }



//TENTATIVE 2: Denlever tous les éléments cochés

var elDone = document.getElementsByClassName("active")


function Clear(){
	console.log(elDone);

	
	document.querySelectorAll('.active').forEach(e => e.remove());
	// document.querySelectorAll('.done').forEach(e => e.parentNode.removeChild(e));


}





// Il faudrait que si on coche un checkbox les deux éléments sont barrés.
// DOnc il faudrait reconfigurer tou le css (refaire une liste d'élément avec les boutons associés 
//Il faudrait refaire le TodoLis d'une autre facon.


//BUTTONS (for the predefined list)

for(i=0; i<blocItem.length; i++){ 
	var Xbtn = document.createElement("button"); 
	var Icon = document.createElement("i")
	Icon.classList.add('fas', 'fa-trash', 'fa-2x');
	blocItem[i].appendChild(Xbtn);
	Xbtn.appendChild(Icon);
	Xbtn.className = "Terminate";

}



//Delete list item + delete button when this delete button is pressed
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function(e) { 
    e.currentTarget.parentNode.remove(); // 

  }, false);
}


function inputLength(){
	return input.value.length; 
}



// DOnc il faudrait créer un espace pour la description. S'il n'y a ps de decription il fauudrait que la classe change et que l'espace réservé à la valeur du input soiit plus retsreint (CSS biensure)

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

		// Remove Action

		for (var i = 0; i < el.length; i++) {
  		el[i].addEventListener('click', function(e) { 
    	e.currentTarget.parentNode.remove();

 	 	}, false);
	}

}

//
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

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.key === "Enter"){
		createListElement();
	}
}

// ------------- EXECUTION --------------


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
input2.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", Checked);
























