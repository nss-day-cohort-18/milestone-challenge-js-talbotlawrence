//I still need to build the object.

// sss*sss
// ss***ss
// s*****s
// *******

/////////////////////////////////////////////////////////////////////////////////////////////
// var myHeight = document.getElementById("rows").value;
// var myChar = document.getElementById("input").value;

treeObj = {
	height: "",
	character: "" 
};

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
	var myHeight = document.getElementById("rows").value;
	var myChar = document.getElementById("input").value;
	treeObj.height = myHeight;
	treeObj.character = myChar;
	if (treeObj.height && treeObj.character === "") {
		alert("Please make sure you fill out the form")
	} else {
		buildTree(treeObj.height, treeObj.character);
	}
});

function buildTree(height, character) {
	var mySpace = " ";
	var j = 0;	
	for (var i = 0; i < height; i++) {
		console.log(mySpace.repeat(height-(i+1)) + character.repeat((i+1)+j));
		j += 1;	
	}
};

var myChar = document.getElementById("input");
myChar.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		submitButton.click();
	}
});


//3
// console.log(mySpace + mySpace + myChar);					//3---myHeight--always one char on line 1-------mySpace.repeat(myHeight-1) + myChar.repeat(1);
// console.log(mySpace + myChar + myChar + myChar);			//4---myHeight + i------------------------------mySpace.repeat(myHeight-2) + myChar.repeat(3);
// console.log(myChar + myChar + myChar + myChar + myChar);	//5---myHeight + i------------------------------mySpace.repeat(myHeight-3) + myChar.repeat(5);

//2
// console.log(mySpace + myChar);								//2---myHeight
// console.log(myChar + myChar + myChar);						//3---myHeight + i

//mySpace.repeat(myHeight-1) + myChar.repeat(1);
//mySpace.repeat(myHeight-2) + myChar.repeat(3);
//mySpace.repeat(myHeight-3) + myChar.repeat(5);

//mySpace.repeat(myHeight-(i+1)) + myChar.repeat((i+1)+j);
//mySpace.repeat(myHeight-(i+1)) + myChar.repeat((i+1)+j);
//mySpace.repeat(myHeight-(i+1)) + myChar.repeat((i+1)+j);

//before the loop, j = 0;
//after the first iteration, j += 1;