//tree function
//build in console.log
//the user can either then just press the enter key (as long as the cursor is in one of the input fields)
//or click a button that is labeled "Grow your tree"
//event listener to the button, as well as an event listener for the enter/return key.
//display an alert stating that both fields must have a value.

// sss*sss
// ss***ss
// s*****s
// *******

// alert("Both fields must have a value");
/////////////////////////////////////////////////////////////////////////////////////////////
var myChar = document.getElementById("input");
var myHeight = document.getElementById("rows");
var submitButton = document.getElementById("submit");
/////////////////////////////////////////////////////////////////////////////////////////////

// var myChar = "*";
// var myHeight = 8;
// var mySpace = " ";
var j = 0;	

for (var i = 0; i < myHeight; i++) {
	console.log(mySpace.repeat(myHeight-(i+1)) + myChar.repeat((i+1)+j));
	j += 1;	
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