console.log("this is from the second script file");


//manipulating complex objects 

var myMusic = [
    {

        'artist' : 'Billy Joel',
        "title" : 'land mine',
        "release year": 1998,
        "sales": "1Billion",
        "formats" : [ 'CD','Spotify','appleMusic','youtube'],
        "gold": true

}
];

//accessing nested objects 


var myStorage = [{

    "car" : {

        "inside":
        {
            "glove box": "maps",
            "passenger seat ": "phone"
        },

        "outside":
        {
            "trunk":"winch"
        }
    }

}];

var firstCar = myStorage[0];


//console.log(firstCar['car']['inside']['glove box']);


var allCars={

    "car" : {

        "inside":
        {
            "glove box": "maps",
            "passenger seat ": "phone"
        },

        "outside":
        {
            "trunk":"winch"
        }
    } 
};


var myPlanst = [
    {
        type : "flowers",
        list : ["rose","tulip","dandelion"],


    },
    {
        type : "fsslowers",
        list : ["rsose","tssulip","dssandelion"],
        

    }
]


/*
console.log("this is from plansts array : " , myPlanst[1].list[0])

console.log(allCars.car.inside["glove box"]);
*/

var scores = [1,3,33,45,556,443,34];

var collection =  [

    {
        "2048" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"],
            year : 1998
        },

        "2049" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        },

        "2050" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        },

        "2051" : {
            
            artist : "the mel",
            tracks : ["one","two","three"]

        }, 

        "2052" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        },

        "2053" : {
            album : "slipper when wet",
            
        }

    },{
        "20481" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        },

        "20492" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        },

        "20501" : {
            album : "slipper when wet",
            artist : "the mel",
            tracks : ["one","two","three"]
        }
    }
    
];

//coding challenge 


var collectionHistory = JSON.parse(JSON.stringify(collection));

//console.log("initial collection : " , collectionHistory);









function updateRecords(id, prop ,val){


    
    if(val === "") {

        
        delete collection[id][prop];

    } else if(prop === "tracks"){

        collection[id][tracks] = collection[id][tracks] || [];
        collection[id].push(val);

    }else { 

        collection[id][prop] = val;

    }

    return collection; 

    

    


}
//console.log(updateRecords("2048","album","SnoopDoogie"));

/*
var collection = [
    {
    name : "this",
    age : 19,
    hobbies : ["eat","sleep","gym"]
    },
    {
    name : "that",
    age : 39,
    hobbies : ["treat","seep","gym"]
    }
    ];
    
    
    console.log("hobbies are : " , collection[1]["hobbies"]);
*/

//while loops 


var myArray = [];
var hisArray = [];
/*
var i = 0;

var timeStarted= performance.now();


while (i < 5){
    myArray.push(i);
    console.log(myArray[i]);
    i++;
}
var timeEnded= performance.now();

var totalTimer = timeEnded - timeStarted;


*/

/*
console.timeEnd('looper');

console.time("forLooper");

//for loops 
/*
for (i = 0; i < 1000;i++){
    hisArray.push(i);
    console.log("this " , hisArray[i]);
}
console.log("while loop complie time : " , endTimeOne);
console.timeEnd("forLooper");

// using performance API 

const startTime = performance.now();

// Code to measure
for (let i = 1; i < 50; i+=2) {
  hisArray.push(i);
  console.log("this ", hisArray[i]);
}


const endTime = performance.now();
const executionTime = endTime - startTime;

console.log("For loop execution time:", executionTime);
console.log("time taken for while loop : " , totalTimer);


*/

var countArray = [];


for(let i=9; i > 0;i-=2){
    countArray.push(i);
    //console.log('this is',countArray[i]);
    
}

//console.log(countArray);

//iterate through an array with a for loop 


var names = ["eins",'zwei','deri','veir','funf','sechs','sieben','acht'];

for( let i = 0 ; i < names.length;i++){
    //console.log("german number : ", names[i]);
}

var product = [[4,6],[7,9],[9,8,7]];

/*console.log("lenght of the Array : " , product.length);
console.log("length of an array in the array : " , product[2].length);*///

function multiplayAll (arr) {

    var total = 1;


for(let i = 0; i < arr.length;i++){

    for(let j = 0; j < arr[i].length;j++){

        var numbers = arr[i][j];

        total*=numbers;

       // console.log(total)

    }
}

return total;

}

//multiplayAll(product);
//iterate with do while loops 

var smartPhones = [ ];

var i = 0;

do{
    smartPhones.push(i);
    i++;
}
while( i < 50 );


//console.log(smartPhones);


//profile lookup | coding challenge - 100% my effort ;-)

var contacts = [
    {
        firstName : 'Akira',
        lastName: 'Zen',
        number:'001',
        likes:'["JS"],["Java"],["C#"]'
    },
    {
        firstName : 'Looper',
        lastName: 'jil',
        number:'002',
        likes:'["htl"],["html"],["loop"]'    }, 
    {
        firstName : 'loop',
        lastName: 'hill',
        number:'003',
        likes:'["html"],["css"],["js"]'    }, 
    {
        firstName : 'troop',
        lastName: 'till',
        number:'004',
        likes:'["js"],["conding "],["TS"]'    },
    {
        firstName : 'nalaka',
        lastName: 'Dr',
        number:'005',
        likes:'["IT"],["research"],["PhD"]'   
     },


];

let propertygiven  = "lastName"
console.log(contacts[1][propertygiven]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////TURNING POINT/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//when name and property is  being passed as arguments(key) , it should return the 
//corresponding value

function lookUpProfile(name,propertyOf){

    let lookingFor = propertyOf;

    //iterate through the contact list 
   for( let i = 0; i  < contacts.length;i++){

        var nameOf = contacts[i].firstName;

       // console.log(contacts[i].firstName);
        if( nameOf === name){
            console.log("match found : ", contacts[i].firstName,"${looknig for } is : ",contacts[i][lookingFor]);
        }
        else {

           
        }
        // console.log("number of number : " , contacts[i].number);

   }
}

//I failed to code for erorrs null values,etc.. so my code snippet is not clean and its buggy

/*lookUpProfile("Looper","lastName");
lookUpProfile("Akira","number");

lookUpProfile("loop","likes");

//what to output when the arguments are not matching to any key in the object array??
lookUpProfile("nalaka","likes");
*/

//code of freecodecamp coder (experienced)


function searchInfo(name, props){

    for( let i = 0; i  < contacts.length;i++){
        if ( contacts[i].firstName === name){
            return contacts[i][props] || " no such property";
      }
    }
    return " no such contant! ";


}

var searchResults = searchInfo("nalaka","likes");
//console.log(searchResults);

//generate random decial numbers 08/01

function randomFunction(){

    return Math.ceil(Math.random()*7);
    
}


 randomFunction();
 randomFunction();
 randomFunction();
 randomFunction();
 randomFunction();
console.log(randomFunction());



var luckyNumber = randomFunction();

//Lucky Draw govi setha ////just for fun/////
function goviSetha ( number){

    if ( number === luckyNumber){

        console.log("2 MILLION WIN ");
    }else {
        console.log("NO WIN! Good Luck next Time ");
    }

}

//goviSetha(5);
//use the parseInt function 
console.log("//////////////////////////////////////// 08 | 01 ////////////////////////////////////////////////////////////")

function convertToInt( str ){

//console.log( "Before parsing : ", typeof(str));
//console.log( parseInt(str));
var parsedNumber = parseInt(str);

//console.log( "After parsing to int :" ,typeof(parsedNumber));




}

//user parseInt function with a Radix 

function converToInteger ( str){

    //binar to integer 

    
   // console.log(str + " in deciaml : " +parseInt(str, 2));
    return parseInt(str, 2);





}

//Ternary Operator 
function checkRace (race){


    if( race === "Tamil"){

        return " Beauty";

    }else {

        return "not cute";

    } 

}

function checkEqual(a, b){

    if ( a != b ){

        console.log(" equal");

    }else if(a === b){

        console.log("in this check the quality of a and b ");
    }else { console.log("not equal");

    }

}

/*

var numA = 20;
var numB = "90";

var sum = numA+numB;


console.log("number A is : " ,typeof(numA));
console.log("number B is : " ,typeof(numB));
console.log("sum is : " ,typeof(sum),sum);*/

//multiple ternary operators 
/*
console.log(numA == numB ? "yes" : numA == 20 ? "woow match" : "no luck ");

*/

//mutate an arrya declared with const ;

"use strict";
/*////////
const namesAll = [1,2,4,5];

//namesAll = [1,2,3]; // throw an error uncaught error assign to const variable 
namesAll = [1,20,3,78];

//but arrays are immutable in java i guess

namesAll[0]  = 9;// yet can be mutate using index,



console.log(namesAll);

*/

//prevent object mutation 

function freezeObject ( ){

    "use strict";

    const MATH_CONSTANTS = {
        PI : 3.14,
    };


    Object.freeze(MATH_CONSTANTS);//make the properties of an object readonly/

    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

const PI = freezeObject();
console.log(PI);


//arrow functions 

function add(a, b){

    return a + b;

}

//annonymus functions 
// annonymus functions can be converted into an arrow function 



var magic = () => new Date();


var myConcat = (arr2 , arr3) => arr2.concat(arr3);//
//console.log(myConcat([1,2],[34,44]));

//higher order arrow functions 
var realNumbers = [1,2.3,45,52,-209,0];
///
/*//////////////////////////////////////////////////////////////// didnt understand anything here 
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0.map( x =>  x*x ));
    return squaredIntegers;
}*/



