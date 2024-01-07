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
        delete collection(id, prop);

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

var i = 0;


while (i < 5 ){
    myArray.push(i);
    console.log(myArray[i]);
}