//It accepts a single object as an argument. The object should have two key/value pairs.
//A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
//the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree"
//If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

//I still need to build the object, the Enter Key function, and the validation.
//I wanted it to work first!

// sss*sss
// ss***ss
// s*****s
// *******

// alert("Both fields must have a value");

// var myChar = "*";
// var myHeight = 8;

/////////////////////////////////////////////////////////////////////////////////////////////
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
	var myHeight = document.getElementById("rows").value;
	var myChar = document.getElementById("input").value;
	buildTree(myHeight, myChar);
});

function buildTree(height, character) {
	var mySpace = " ";
	var j = 0;	
	for (var i = 0; i < height; i++) {
		console.log(mySpace.repeat(height-(i+1)) + character.repeat((i+1)+j));
		j += 1;	
	}
};


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