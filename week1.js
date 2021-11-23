//// DotNotation

// console.log("Hello World")
// console.log("hello".toUpperCase());

// var col = `   |  |  `;
// var row = `----------`;
// console.log(`${col}\n${row}\n${col}\n${row}\n${col}`);

// var column = `   |    | \n  |   | \n   |   | `;
// var row = `-----------`;
// console.log(`${column}\n ${row} \n${column} \n ${row} \n${column}`);

// var column =`   |   | \n   |   | \n   |   | `;
// var row = `-----------`;
// console .log(`${column}\n${row} \n${column} \n${row} \n${column}`);



////Variables and Operators

///////activity 1
// let userName = "Melvin";
// let age = "41";
// let favColor = "aquamarine";

// console.log(`My name is ${userName}. I am ${age} years old. My favorite color is ${favColor}`);

// userName = "Riley"
// age = "25"
// favColor = "Rainbow"

// console.log(`My name is ${userName}. I am ${age} years old. My favorite color is ${favColor}`);

///////activity2
// let breakfast ="Shreddies";
// let lunch ="Sandwich";
// let dinner = "Salmon";
// console.log(`Today I have had ${breakfast} for breakfast, ${lunch} for lunch and i shall be having ${dinner} for dinner!`);

// breakfast = "Oatmeal";
// lunch = "Grain risotto";
// Dinner = "burgers";
// console.log(`Tomorrow I shall be having ${breakfast} for breakfast, ${lunch} for lunch and top the day with ${dinner} for dinner!`);
// point of this was to just show how to change the content of the 'variable' box and


///////activity 3


// const birthDay = new Date("1980,11,09");
// const todaysDate = new Date("2021,11,17");om
// //using the Date Object to set the 2 required dates to 2 variables

// let diffInTime = birthDay.getTime() - todaysDate.getTime();
// //this gets the difference but in milliseconds

// let diffInDays = diffInTime/ (1000*3600*24);
// //this converts previous value to days

// let years =diffInDays/365;
// console.log(Math.floor(years));

// //then solution to og question is written or logged using string template literals
// console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days`);
// //the above might need rewording



// //////// Activity 4
// //i being columns j being rows, is there a neater more inclusive/comprehensive way of incorporating these inelegant entries???
// let space0 = " ";
// let space1 = "x";
// let space2 = "o";
// let space3 = " ";
// let space4 = " ";
// let space5 = "x";
// let space6 = " ";
// let space7 = "o";
// let space8 = " ";
//  //is it necessary to make 9 variables? there are only 3 permutations....
// let i = "|"; //vertical lines
// let j = "-----------"; //horizontal lines


// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);
// console.log(` ${space1} ${i} ${space2} ${i} ${space3}`);
// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);
// console.log(`${j}`);
// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);
// console.log(` ${space5} ${i} ${space5} ${i} ${space6}`);
// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);
// console.log(`${j}`);
// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);
// console.log(` ${space7} ${i} ${space8} ${i} ${space0}`);
// console.log(` ${space0} ${i} ${space0} ${i} ${space0}`);

////// IfElseSwitch

///// Activity 1

// let age = 16

// if (age > 17) {
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

//stretch

// let age = 18;
// let country = "Australia";

// if (age > 18 && country === "Australia"){
//     console.log("Yes I can serve You")
// } else {
//     console.log("You aren't old enough")
// }


/////Activity 2

// let topping = "Pepperoni"

// switch(topping){
//     case "Country ham":
//     case "Salmon":
//     case "Avocado":
//     case "Kale":
//         console.log("These are important ingredients for my pizza"); 
//         break;
//     case "Mushrooms":
//     case "Pepperoni":
//         console.log(`I dont mind having ${topping} on my pizza`);
//         break;
//     case "Pineapple":
//     case "Spinach":
//         console.log(`${topping} should not be on a pizza`);
//         break;
//     default:
//         console.log("These ingredients shall suffice.....")
    
   
// }



/////Activity 3


// let password = "iamcool";

// if (password.length < 8){
//     console.log("Password is too short!");
// } else {
//     console.log(`Your password, ${password} is accepted!`);
// }



///// Activity 3 Stretch


// let num = 60;

// if (num % 3 == 0  && num % 5 == 0){
//     console.log("This number is divisible by both 3 and 5!");
// } else if (num % 5 == 0){
//     console.log("This number is divisible by 5.");
// } else if (num % 3 == 0  ) {
//     console.log("This number is divisible 3!");
// } else {
//     console.log("This number is indivisible by either 5 or 3!") ;
// }



/////Activity 4


// let num = 60;

// switch(true){
//     case num % 5 == 0 && num % 3 == 0:
//         console.log("Fizz Buzz");
//         break;
//     case num % 5 == 0:
//         console.log("Buzz");
//         break;
//     case num % 3 == 0:
//         console.log("Fizz");
//         break;
//     default:
//         console.log("This number is indivisible by 3 or 5");
// }



/////Activity 5


// let num = 10011001;
// let numString = num.toString(); //converts the number to a string
// let reverseNumString = numString.split('').reverse().join(''); // parses through numbers by splitting them then reversing then recombining

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }



///// Activity 6

// let time = 7;
// let placeOfWork = "Liverpool";
// let townOfHome = "The Wirral";

// if (time == 7){
//     console.log(`I am currently in ${townOfHome}`);
// } else if (time == 8){
//     console.log(`I am on my way to work in ${placeOfWork}`);
// } else if (time == 9){
//     console.log(`I am in ${placeOfwork}, working at the moment`);
// } else {
//     console.log(`Between 9 to 5 I am in ${PlaceOfWork}. Otherwise I shall be in ${townOfHome}`)
// }



/////// ArrayAndLoops

////// Activity 0

// let favFilms = [ "His Girl Friday", "Captain America: Winter Soldier", "Atomic Blonde", "Elisabeth"  ]

// favFilms.push("The Rock", "District 9")

// const removed = favFilms.pop();

// console.log(favFilms); // output should be all but removed itrem from array

// console.log(removed); // output is the 'pop'ed item




///// Activity 1

// let favFilms = [ "His Girl Friday", "Captain America: Winter Soldier", "Atomic Blonde", "Elisabeth"  ]

// favFilms.push("The Rock", "District 9")


// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i])
// }



///// Activity 2

// for (let i = 0; i <6; i++) {
//   console.log(Math.floor(Math.random() * 50));
// };



///// Activity 3

// for (let i = 9; i>=0; i--){
//   console.log(i)
// }



///// Activity 4


// let movies = ["Avengers", "Aviator", "Elizabeth", "Lost in Translation"]

// for (let i = 0; i <movies.length; i++){
//     if (movies[2] === "Ghostbusters!"){
//         console.log("Yay, it's Ghostbusters!")
//         break
//     } else {
//         console.log("Boo! We want Ghostbusters!")
//         break
//     } 
// }


///////Activity 5


// let num = Math.floor(Math.random()*30) ;

//   for (let i = 0; i <6; i++) {
//        console.log(num);
//   if (num % 7 == 0){
//        console.log (`${num} is divisible by 7!`)
//       }
//       num = Math.floor(Math.random()*30) /// what is conceptual reason for this line?
//     } //else {
//         //console.log("None of these numbers are divisible by 7!")
//     //}


////// Activity 6

// let melvinFollowers = [ "Marieke", "William", "Libby", "Ndamukhong"];
// let melanieFollowers = [ "Kato", "Torrunn", "Marieke", "Libby"];

// for (let i = 0; i<melvinFollowers.length; i++){  // loop that iterates over first array
//     for (let j = 0; j<melanieFollowers.length; j++){  // loop that iterates over second array

//      if (melvinFollowers[i] == melanieFollowers [j]){
//         console.log(`${melvinFollowers[i]} is in both arrays!`);//if statement that parses arrays for overlaps
//     } 
//     }
// }



//////// Functions

///// Activity 1
// const factorial = (n) => {
//   if ((n === 0)) || ((n === 1)) {
//       return 1;
//   } else {
//       return (n* factorial(n-1));
//   }
// } 

//console.log(factorial(33));

// const factorial = (n) => {
//   if ((n === 0)) || ((n === 1)){
//     return 1;
//   } else {
//     return (n* factorial(n-1));
//   }
// } 
// console.log(factorial(33));



///// Activity 2

// Pizza topping function
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++
// }

// console.log(takeOrder("Ham", "Pineapple"));
// console.log(orderCount);



//////Objects

////// Activity 1

// const person = {
//     name: "Melvin",
//     age: "41",
//     hair: "short",
//     ethnicity: "Vaguely brown",
//     favSongs:[
//         "DOA by Jay Z",
//         "Vulcanella by Magic Dirt",
//         "Round Midnight by Thelonius Monk"
//     ],
//     sayHi (){
//         console.log(`Hello my name is ${this.name}`)
//     }
// };
// person.sayHi();




////// Activity 2


// const pet = {
//     name: "SillyCat",
//     typeOfPet: "Cat",
//     age: 2,
//     color: "black",
//     drink (){
//         console.log(`${this.name} is drinking`);
//     }, eat () {
//         console.log(`${this.name} is eating`);
//     },
// };
// pet.drink();
// pet.eat();

