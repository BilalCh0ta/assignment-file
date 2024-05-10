// QUESTION 1 

let ans1 =document.querySelector(".ans1")

for( i= 0 ; i < 5 ; i++){
    ans1.innerHTML += "hello world! <br>"
}

// QUESTION 1 


// QUESTION 2 
let ans2 =document.querySelector(".ans2")

for( i= 0 ; i < 10 ; i++){
    ans2.innerHTML += `${i+1} <br>`
}




// QUESTION 2 




// QUESTION 3
let tableNum = document.querySelector(".table")
let tablelen= document.querySelector(".length")
let ans3  = document.querySelector(".ans3")



function table(){

    for(i = 1 ; i <= tablelen.value ; i++){
        ans3.innerHTML += `${tableNum.value} * ${i}  = ${tableNum.value * i} <br>`
        
    }
    
   

}



// QUESTION 4
let ans4  = document.querySelector(".ans4")


for(i =1 ; i <=15 ; i++){
    ans4.innerHTML += `${2} * ${i} = ${2 * i} <br>`
}

// QUESTION 4



// QUESTION 5
let ans5  = document.querySelector(".ans5")

let array = ["nokia" , " samsung" , " apple" , " sony"]

for(i = 0;i <array.length; i++){
    ans5.innerHTML += array[i] + "<br>"
}
// QUESTION 5



// QUESTION 5
let ans6  = document.querySelector(".ans6")

let fruits = ["apple" , " mango" , " grapes" , " orange"]

for(i = 0;i <fruits.length; i++){
    ans6.innerHTML += `Element at index ${i} is ${fruits[i]} <br>`
}
// QUESTION 5








