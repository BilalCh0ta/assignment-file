//  QUESTION 1


let names = [];
console.log(names);



//  QUESTION 1 




//  QUESTION 2 



//  QUESTION 2 






//  QUESTION 3 

let string = ["bilal " , " Muhmmad Iqbal" ]
let ans3 = document.querySelector(".ans3")

ans3.innerHTML = string

//  QUESTION 3


//  QUESTION 4 

let number = [19 , 25 ]
let ans4 = document.querySelector(".ans4")

ans4.innerHTML = number

//  QUESTION 4


//  QUESTION 5 

let boolean = [true , false ]
let ans5 = document.querySelector(".ans5")

ans5.innerHTML = boolean

//  QUESTION 5



//  QUESTION 6 

let mix = ["Bilal " , 14 ,  true ]
let ans6 = document.querySelector(".ans6")


//  QUESTION 6


//  QUESTION 7 
let ans7 = document.querySelector(".ans7")

let mobnet = [
    "Mobilink (Jazz)",
    "Telenor Pakistan",
    "Zong",
    "Ufone",
    "Warid Telecom (Now merged with Mobilink)"
  ];


  ans7.innerHTML =  mobnet 



//  QUESTION 7


//  QUESTION 8
let ans8 = document.querySelector(".ans8")

let education = [
    "SSC",
    "HSC",
    "BCG",
    "BS",
    "BCOM",
    "MS",
    "M. Phil",
    "PhD",

  ];

for(i  =0 ; i <education.length ; i++){
    ans8.innerHTML +=   `${i+1} ) ${education[i]} <br>`

}
  




//  QUESTION 8


//  QUESTION 9


let movies  = [];
let  ans9 = document.querySelector(".ans9")


movies[0] = "Avengers :  Age of  Ultron"
movies[1] = "Spectre"
movies[2] = "Jurassic Wolrld"
movies[3] = "Inside Out"

let length = movies.length
ans9.innerHTML  = `length of array is ${length} <br> <br> `

for(i = 0 ; i < movies.length; i++){
    ans9.innerHTML += `${movies[i]} <br> `
}



//  QUESTION 9





//  QUESTION 10

let cars  = ["supra" , "civic" , "elantra" , "sunata"];
let  ans10= document.querySelector(".ans10")
let lastIndex = cars.length -1 ;
let lastCar = cars[lastIndex];


ans10.innerHTML = `car at first index  = ${cars[0]} <br> last index = ${lastCar}`

//  QUESTION 10




//  QUESTION 11

// let sNmae = ["hamza" , 'ali' , "hassan"]
// let sMarks = [345, 480 , 330]

// // sName[]  = sMarks[]

// console.log(sMarks);
// let total = 500 
// let per  = (total * 100) / sMarks



//  QUESTION 11




//  QUESTION 12
let ans12 = document.querySelector(".ans12")
let fColor = document.querySelector(".fcolor")
let lColor = document.querySelector(".lcolor")
let color = ['green' , "blue" , "red" , "purple" , "pink" ] 

function fcolor(){
    color[0]  = fColor.value


    
ans12.innerHTML = color

}

function lcolor(){
    color[4]  = lColor.value


    
ans12.innerHTML = color

}


//  QUESTION 12




//  QUESTION 13

let scores = [300 , 100 , 400 , 200]

console.log(scores);


scores.sort()


console.log(scores);

//  QUESTION 13




//  QUESTION 14

let fruits =["mango" , "apple" , "grapes"]


let ans14 = document.querySelector(".ans14")



for(i = 0 ; i < fruits.length ; i ++){
    ans14.innerHTML += `${i+1} : ${fruits[i]}  <br>` 
}

//  QUESTION 14
























//  QUESTION 7


//  QUESTION 7
