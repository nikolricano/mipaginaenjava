/*  This is JS >: (  */

//console.log('Hello World');
//alert('Hello World');
//document.querySelector('body').innerHTML = "Hello World";


/***********  1. Variables  ***********/ 

//var name; 
//name = "Ohm";

//var age = 26;

//var price = 12.5;

// Bad practice
// lastName = "Sainz";

//console.log(name);
//document.querySelector('body').innerHTML = "Hello " + name;


/*********** 2. Numbers & Math **********/ 

// var age = 19;
// age++; <-- Add +1 
// 
// var number = 12.5;
// 
// console.log(age + number);


/*
 *  Math 
 *  Division  = / 
 *  Multiply  = *
 *  Addition  = + 
 *  Substract = -
 *  Mod       = % 
 */

// var result = age + number;
// console.log(result);

// function isEven() {
//   if (number % 2 == 0) {
//     return true;
//   } 
//   return false;
// }

// console.log(Math.pow(2,3));
// console.log(Math.round(0.9));
// console.log(Math.cell(0.1));
// console.log(Math.floor(0.9));
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.sqrt(4));


/*********** 3. Strings **********/ 

// var newStringHere = "Hello World";
// var simpleStringHere = 'Hello World';
// 
// var firstName = "Ohm";
// var lastName = "Sainz";
// var name = 'Hey ' + firstName;
// 
//console.log("La longitud de la cadena es: " +name.length);

// If inside 
// var result = name.indexOf("Ohm");
// console.log("Index of " + name + " es:" + result); 
// 
// Example 
/* if (name.indexOf("Ohm") != -1) {
   console.log("Welcome to Latam");
} else {
   console.log("Who are you?");
}*/

// var name = "New Ohm";
// console.log(name.indexOf("Ohm"));
// 
// console.log("Position is: " + name[2]);
// console.log("Name: " + name[name.length -1]);
// 
// console.log("Character at position 1 is: " + name.charAt(1));


// name = name.replace("O", "U");
// 
// console.log("The new name is: " + name);
// 
// console.log(name.slice(1,3));
// 
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


/*********** 4. Conditionals **********/ 

// True or False
// 
// if ( condition ) {
//   
//}
// 

/* 
 * Logic Operator 
 *
 * Bool -> true / false
 * 
 * || OR
 * && AND
 * ==    ===
 * !=    !==
 * !
 * 
 */
 
// if (true) {
//   console.log("Condition is true");
// }

if (!false) {
 console.log("Condition is true");
}

// var numberOne = 23;
// var numberTwo = 17;
// if (numberOne <= numberTwo) {
//   console.log("Number One is bigger");	 
// } 
//
// var numberOne = 23;
// var numberTwo = "23";


// Convert and compare
//if (numberOne == numberTwo) {
//   console.log("Im here!");	
//}

// Compare
//if (numberOne === numberTwo) {
//   console.log("Im here!");	
//}

// Compare
// if (numberOne === numberTwo) {
//   console.log("Im here!");	
// } else if (!numberOne) {
//   	
// } else {
//	
// }


// While 
//var count = 0;
//while(count < 10) {
//   count = count + 1; // count++;
//   console.log(count);	
//   if (count % 2 === 0) {
//     console.log(count);
//   } 
//}

// do {
//   count++;
//   console.log(count);	
//   if (count >= 10) {
//     break;
//   }	
// } while(false);


// For 
//for (init; condition; increment ) {
	
//}

//for (var i = 0; i < 10; i++ ) {
//   console.log(i);
//}

//var names = ["Rodrigo", "Luis", "Mikel"];
//
//for (var i = 0; i < names.length; i++ ) {
//   console.log(names[i]);
//}


// TypeOf - Null - Undefined
// console.log(typeof number);
// if(typeof hello == "undefined") {
//    console.log("Not available");	
// }

// Null --> absence of value


//var message = "42";
//parseInt(message);


/*********** 5. DOM **********/ 

var div = document.getElementById("myDiv");
div.classList.add("myNewClass");
// 
// Array

var newDiv = document.getElementsByClassName("myNewClass");
console.log(newDiv); 
// 
document.getElementsByTagName("div");
// 
// New 
// Return One
var myClass = document.querySelector(".myNewClass");
// Return All
document.querySelectorAll("div");
// 
// 
// Own jQuery
function $(selector) {
   return document.querySelector(selector);
}
// 
var myClass = $(".myNewClass");


// Events 
function newClick() {
   alert(":3");
}

/*********** 6. Arrays **********/ 

var newArray = []; //<--- Better
var newArray = new Array(); 
var newArray = new Array(20); // <-- 20 Elements undefined 
var newArray = new Array(20, 10); // <-- 2 Elements 20 and 10.
// 

var newArray = [20, "Hello World", {}, [] ];
console.log(newArray[0]);
console.log(newArray.length);
// 
// How to add?
newArray.push(7); // <-- Add Last
newArray.unshift(7); // <-- Add first
newArray.pop();
console.log(newArray);
// 
// Iteration 
// 
var anotherArray = [20, 10, 5];
for (var i = 0; i < anotherArray.length; i++) {
   console.log(anotherArray[i]);
}

for (var i = anotherArray.length; i >= 0; i--) {
   console.log(anotherArray[i]);
}

// 
// Optimized
var anotherArray = [20, 10, 5];
var i = anotherArray.length;
for (; i >= 0; i--) {
   console.log(anotherArray[i]);
}

/*********** 7. Functions **********/ 

// function name_of_function() {
// 
// }

// function add(a, b) {
//	return a + b;
// }

// var result = add(2, 5);

// console.log(result);



// Methods for Array
// 
// var newArray = [2, 5, 1, 10, 20];
// newArray.sort();
// console.log(newArray);
// 
// 
// function order(a, b) {
//   if (a > b ) {
//     return 1;
//   } else if (b > a ) {
//   	return -1;
//   } else {
//     return 0;
//   }
// }
// 
// var newArray = [2, 5, 1, 10, 20];
// 
// newArray.sort(order);
// console.log(newArray);
// 
// newArray.reverse();
// 
// var newArray = "a, b, c, 2".split(",");
// console.log(newArray);
// 
// newArray = newArray.join("p"); <-- Return a String
// 


//var numbers = [10, 2, 3, 5, 9, 20, 22, 8];

// Without filter 
/* var numEven = [];

for (var i = numbers.length; i >= 0; i--) {
	var num = numbers[i];

	if (num % 2 == 0){
		numEven.push(num);
	}
}

console.log(numEven); 
*/

// Build a new array - Filter is a method.
/* var numEven = numbers.filter(function(num) {
  return num % 2 === 0;
});
 
console.log(numEven); 
*/

//var number = [1, 5, 6, 8];

/*  Long Way

var square = [];

for (var i = number.length -1; i >= 0; i--) {
  var num = number[i];

  square.push(Math.pow(num,2));
}

console.log(square);
*/


// Return a new array - Could be Object, True, False, Array, Number --> Array
/* var square = number.map(function(element) {
  return element * element;
});

console.log(square);
*/


/*********** 8. For Each **********/ 

//var numbers = [2, 4, 6, 8, 10];

/*numbers.forEach(function(element, index, newArray) {
  console.log(element);
  console.log(index);
  console.log(newArray);
}); */

/* numbers.forEach(function(element, index, newArray) {
  newArray[index] = Math.pow(element, 2);
});

console.log(numbers);
*/


/*********** 9. JSON **********/ 

// JSON => JavaScript Object Notation
// Hashes / Dictonary
// 
// var arreglos = [1, 2, 3, 4];

/* var course = {
  title: "Desafío Latam",
  teacher: "Ohm Sainz",
  mondayClass: function() {
  	console.log("Welcome to " + this.title + ", I'm " + this.teacher + " and I'm gonna be your teacher");
  }	
};

console.log(course["title"]);
console.log(course.teacher);
console.log(course);
console.log(course.mondayClass());
*/ 


/*********** 10. Objects **********/ 


// Prototype using Functions 
// 
//function User( firstName, lastName ) {
//	this.firstName = firstName;
//	this.greetings = function() {
//		console.log("Hey hi! I'm " + this.firstName);
//	}

//	if (typeof lastName !== "undefined") {
//		this.name = firstName + " " + lastName;
//	}

    
//}

//var ohm = new User("Ohm", "Sainz");
//ohm.greetings();

//console.log("Hey, nice to meet you, I'm " + ohm.name);
















































