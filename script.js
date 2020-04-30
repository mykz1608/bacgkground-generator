var input = document.getElementById("userinput");
var add = document.getElementById("enter");
var ul = document.querySelector("ul");
var check = [];

input.addEventListener("keypress",keyPress);
add.addEventListener("click",mouseClick)


function addListItem() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	li.append(span);
	span.append(document.createTextNode(input.value));
	
	ul.appendChild(li);
	input.value='';
	span.addEventListener("click",toggleDone);

	var deleteButton = document.createElement("button");
	li.appendChild(deleteButton);
	deleteButton.innerHTML  = "Delete";
	deleteButton.addEventListener("click",deleteList);

	function toggleDone() {
		span.classList.toggle("done");
	}

	function deleteList() {
		li.classList.toggle("erase");
		setTimeout(function(){li.remove()}, 200);
	}
		

}

function keyPress(event){
	if(input.value.length>0 && event.keyCode===13){
		addListItem();
	}
}

function mouseClick(){
	if(input.value.length>0){
		addListItem();
	}
}

