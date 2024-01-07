//access the DOM for manipluation the html elemets 

const toggleBtn = document.getElementById('toggle-btn');
const body  = document.body;

toggleBtn.addEventListener("click", function(){
    
    
    body.classList.toggle("dark-mode");
    // save user preferenceto local storage



});







// add two input numbers 
const firstNumber = 0;
const secondNumber = 0;

function numberAdder(){
    const firstNumber = parseFloat(document.getElementById("number1").value);
    const secondNumber = parseFloat(document.getElementById("number2").value);
    const sum = firstNumber+secondNumber;

    //debugging the DOM accessibility 
   /* console.log("first number : "+ firstNumber)
    console.log("second number : " + secondNumber)*/

    document.getElementById("results").textContent = "the sum is " + sum;


}


//reset all
 function clearFields(){

    document.getElementById("number1").value = '';

    document.getElementById("number2").value = '';
    document.getElementById("results").textContent = '';

 }





 
//js practice 

var count = 0;

function cc(card){
    switch(card){
        case 2:case 3:case 4:case 5:case 6:
                            count++;
                            break;




                        case 10:case 'K':case 'Q':case 'J':b
                            count --;
                            break;

    }

    return count;
    
};

//javascript properties 

var dog = {
    name : "Casper",
    legs : 4,
    tail : 2,
    "dog origin": "Deutschland"
};

//reassign properties 


var freinds = [{

    "brends" : " Berlin",
    "josh" : " Frakfurt",
    "Nikolaus":"Feriburgh",
    "Lena" :"Humberg",
    "Matt" : "UK",
    "Scott" : ["UK","Scottland","Earth"]

},
{

    "brends" : " tttttttt",
    "josh" : " Frrrrrrrrrrakfurt",
    "Nikolaus":"Ferttttttttiburgh",
    "Lena" :"Humbettttttttttrg",
    "Matt" : "UtttttttK",
    "Scott" : ["UKttttttttt","Scotddddtland","Eadddddrth"]

},


];

var justAdded  = {

    "brends" : " Berlin",
    "josh" : " Frakfurt",
    "Nikolaus":"Feriburgh",
    "Lena" :"Humberg",
    "Matt" : "UK",
    "Scott" : ["UK","Scottland","Earth"]
};


// unshift : adds the element to the 0th index

freinds.unshift(justAdded);

console.table([justAdded]);




var firstFriendFrom = freinds[0];

console.log('%c My friends', 'color:red;');
console.log({firstFriendFrom});







dog.name = "Avishka";

dog.bark = "woof";

//delete a property from an object 


//console.log("the dog says : ", dog.bark);



var testObj = {

    "hat" : "ball cap",
    "shirt":"mose",
    "shoes": "waves",
    "cloth coutnt": "only four"
};


var cap = testObj.hat;

var hatValue = cap;
var clothCount = testObj["cloth coutnt"];







//console.him 
console.time('looper');

let cars = [

    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "Black",
        "type": "Lambo wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 6
    },
    {
        "color": "Gold",
        "type": "station prius",
        "registration": new Date('2018-03-03'),
        "capacity": 3
    },

];


let newCar = {

        "color": "brown",
        "type": "rover ",
        "registration": new Date('2018-03-03'),
        "capacity": 6
    
}




console.log(newCar);







//console.him 
console.timeEnd('looper');
























/*
console.log("the name Hat : " , hatValue);
console.log("cloth count  : " , clothCount);
console.log("our dog is " +  dog.name+".")
console.log("our dog is  form: " + dog["dog origin"]);*/