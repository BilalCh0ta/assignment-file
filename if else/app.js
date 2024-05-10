
// Question 1



let num1 = document.querySelector(".num1")  
let ans1 = document.querySelector(".ans1")
function numcheck1(){
if (num1.value % 3 === 0){
    ans1.innerHTML = `${+num1.value} is divisible by 3`
}else{
    ans1.innerHTML = `${+num1.value} is not divisible by 3`
}

}


// Question 1



// Question 2


let num2 = document.querySelector(".num2")  
let ans2 = document.querySelector(".ans2")


function numcheck2() {
    if(num2.value % 2 == 0){
        ans2.innerHTML = `${num2.value} is even` 
    }else{
        ans2.innerHTML = `${num2.value} is odd` 

    }
}

// Question 2


// Question 3


let age1 = document.querySelector(".age1")  
let ans3 = document.querySelector(".ans3")


function agecheck1(){
if(age1.value > 18){
    ans3.innerHTML = "old enough"
}else{
    ans3.innerHTML = "to young"
    
}


}
// Question 3




// Question 4

let name1 = document.querySelector(".name1")  
let ans4 = document.querySelector(".ans4")
let myName  = "bilal"

function greetuser1(){
    if(name1.value == myName){
        ans4.innerHTML = `hello ${name1.value} how are u ,I hope ure doing well`
    }else{
        ans4.innerHTML = ""
    }
}

// Question 4





// Question 5

// REMANING

// Question 5





// Question 6

// REMANING

// Question 6




// Question 7

// REMANING

// Question 7





// Question 8

// let time1 = document.querySelector(".time1")  
// let ans8 = document.querySelector(".ans8")




// function daytime1(){

// if(time1.value > 0 &&  )

// }

// Question 8





// Question 9

let year1 = document.querySelector(".leap-year")
let ans9 = document.querySelector(".ans9")

function checkleap() {
    if(year1.value % 4 ==0){
        ans9.innerHTML = `${year1.value} is a leap year`
    }
    else{
        ans9.innerHTML = `${year1.value} is not a leap year`
    }

}

// Question 9



// Question 10

let pass1 = document.querySelector(".pass1")
let conpass1 = document.querySelector(".con-pass-1")

let ans10= document.querySelector(".ans10")


function Pass1() {
    if(pass1.value == ""){
        alert("please enter ur password")
    }
    else if(pass1.value == conpass1.value){
        ans10.innerHTML = "CORRECT PASSWORD!"
    }else{
        ans10.innerHTML = "INCORRECT PASSOWRD!"
    }
}


// Question 10




// Question 11
let name2 = document.querySelector(".name2")
let ans11= document.querySelector(".ans11")





function fahad1(){
    if(name2.value == "Fahad" || name2.value == "FAHAD" ||  name2.value == "fahad"  ) {
        ans11.innerHTML = `Hello ${name2.value}`
        }else{
            ans11.innerHTML = 'you are not fahad'
        }
}





// Question 11




// Question 12

let greeting ;
let hour = 13;

if(hour < 18){
    console.log("good day");
}else {
    console.log("good evening");
}

// Question 12




// Question 13

let x = 10;
let y = 12

if(x >= y){
    console.log(`x =  ${x}  is greater `  );

}
else if(y >= x){
    console.log(`y = ${y} is greater`);
}
else{
    console.log("nothing");
}

// Question 13


// Question 14
 let num3 =document.querySelector(".num3")
 let ans14 =document.querySelector(".ans14")




 function pzn(){
if(num3.value > 0){
    ans14.innerHTML = `${num3.value} is positive `

}
else if(num3.value < 0){
    ans14.innerHTML = `${num3.value} is negative `

}
else{
    ans14.innerHTML = ` ZERO `
    
}
 }



// Question 15
 let hour1 = document.querySelector  (".hour1")
 let ans15 = document.querySelector  (".ans15")


 function Hour1(){
    if(hour1.value >= 6  && hour1.value <=9){
        ans15.innerHTML = "Breakfast is served"
    }
    else if(hour1.value >= 11 && hour1.value <=13){
        ans15.innerHTML = "Time for lunch"
    }
    else if(hour1.value >= 17 && hour1.value <=20){
        ans15.innerHTML = "Its dinner time"
    }
    else{
        ans15.innerHTML = "Sorry,you will have to wait"
    }
 }

// Question 15




// Question 16
let type ;

let ans16 = document.querySelector(".ans16")


ans16.innerHTML = typeof(type = 'd')








// Question 16

// Question 17
let char = "f"

// let vowel = ["a" , "e" , "o" ,"i" ,"u"]

let ans17 = document.querySelector(".ans17")

if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    ans17.innerHTML =  true

}else{
ans17.innerHTML = false
}










// Question 17





















