// QUESTION 1


let a = 3
let b =5
let sum = a + b 
let ans1 = document.querySelector(".ans1")

ans1.innerHTML  = `the sum of  ${a} + ${b} is ${sum}`

// QUESTION 1


// QUESTION 2


let d = 3
let c =5
let sub= c - d
let product = c * d
let division = c / d


let ans2 = document.querySelector(".ans2")


ans2.innerHTML = `the subtraction of  ${c} - ${d} is ${sub}  <br>
the product of  ${c} * ${d} is ${product}  <br>
the subtraction of  ${c} / ${d} is ${division}  
`



// QUESTION 2



// QUESTION 4
let ticketPrice = 600

let fiveTicketPrice =  ticketPrice * 5
let ans4 = document.querySelector(".ans4")

ans4.innerHTML = `the price of 5 ticket is ${fiveTicketPrice}`




// QUESTION 4



// QUESTION 5
let ans5 = document.querySelector(".ans5")

for (i = 1 ; i <=10 ;i++){
    ans5.innerHTML += ` ${4} * ${i} = ${4 * i} <br>`
}
// QUESTION 5


// QUESTION 6

let celcius = 100
let Fahrenheit = (celcius * 9/5) + 32
console.log(Fahrenheit);

let fah = 120
let ce = (fah - 32 ) * 5 /9

console.log(ce);
// QUESTION 6







