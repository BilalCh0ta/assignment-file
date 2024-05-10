// Q1 

document.write("Q1")

for(i = 1 ; i <= 5 ; i++){
    document.write( i+ " : Hello World <br />" )
}

document.write("Q1 <br>")


// Q1 



// Q2 

document.write("Q2")


for( count = 1 ; count < 11 ; count++){
    document.write(`${count} <br />`)
}


document.write("Q2")

// Q2 



// Q3

document.write("Q3")



let length = +prompt('c')
function getTable(){
    let table = document.querySelector(".table")
let ans = document.querySelector(".tab-ans")

    for(let i = 1 ; i <= length ; i++) {
        ans.innerHTML = `${table.value} * ${i} = ${table.value * i} `
        
    }
    


}


function printMultiplicationTable() {
    // Get the table number and length from the input fields
    const tableNumber = document.getElementById('table-number').value;
    const tableLength = document.getElementById('table-length').value;
  
    // Create the table element
    const table = document.getElementById('table');
  
    // Clear the table element
    table.textContent = '';
  
    // Print the header of the table
    table.textContent += `${tableNumber} x `;
  
    // Use a for loop to print the multiplication table
    for (let i = 1; i <= tableLength; i++) {
      table.textContent += `${i} = ${tableNumber * i} `;
    }
  }

document.write("Q3")
  

// Q3




// Q5   

document.write("Q5")


let z = ['Nokia' , 'Samsung' , 'Apple' , 'Sony'  , 'Huawei'  ]




for( i = 0 ; i < z.length ; i++ ){
    console.log(z[i]);  
}
for (let i = 0; i < z.length; i++) {
    console.log(`Element at Index ${i}: ${z[i]}`);
}
document.write("Q5")

// Q5



// Q7


document.write("Q7")

document.write("Counting : ")

for(i = 1 ; i <=15 ;i++ ){
    document.write(`${i} `)
}  

document.write(" <br> <br>  Reverse Counting :  ")

for(i = 15 ; i >= 1 ; i-- ){
    document.write(`${i} `)
}  

document.write("<br> <br> Even : ")

for( i = 0 ; i <= 20 ;i++  ){
   if(i % 2 ===0){
    document.write(`${i} `)
   }
}

document.write("<br> <br> Odd : ")


for( i = 1  ; i < 20; i++){
    if(i % 2 !== 0){
        document.write(`${i} `)
    }
} 

document.write("<br> <br> Series : ")


for(i = 2 ; i <= 20 ; i++){
if(i % 2 ===0)

    document.write(`${i}k `)
}


document.write("Q7")


// Q7


// Q8 

document.write("Q8")


let input = document.querySelector(".bake")
let ans = document.querySelector(".ans")
let bakeryItem = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']

function bakeItem(){
    if(bakeryItem.includes(input.value)){
        ans.innerHTML = `${input.value} is available`
input.value = ' '
    }
    else{
        ans.innerHTML = `${input.value} is not available`
input.value = ' '

    }
}
document.write("Q8")

// Q8 


// Q9 
document.write("Q9")



let array = [24,53,78 ,91,12 ];
let max  = array[0]

function maxi(){
for (let i = 0 ; i < array.length ; i++){
    if(array[i] > max){
        max = array[i]
    }
}
document.write(max + "<br>")

}
maxi()


document.write("Q9")

// Q9 


// Q10


document.write("Q10")


let array2 = [24,53,78 ,91,12 ];
let mini = array2[0]

for(i = 0 ; i < array2.length ; i++){
    if(array2[i]<mini ){
        mini = array2[i]
    }

    // console.log(array[i])
}
document.write(`${mini} <br>`)

document.write("Q10")


// Q10 




// Q11

document.write("Q11")


let arrays = [24, 53, 78 , 91 ,12];
let maxs = array[0];
let  minis = array[0]


for (let  i = 0 ; i<array.length ; i++){
    if(arrays[i] < minis ){
        minis = array[i]
    }
    else if(array[i] > max ){
        maxs = arrays[i]
    }
    document.write(`the smallest number is ${minis} <br>`)
document.write(`the largest is number is ${maxs} <br>`)
} 
document.write('<br> <br>')
document.write(`the smallest number is ${minis} <br>`)
document.write(`the largest is number is ${maxs} <br>`)


document.write("Q11")
  

// Q11


    // Q12 


document.write("Q12")

    for(i = 1; i <= 100; i++) {
        if(i % 5 ===0){
document.write(`${i} `)
        }
    }

document.write("Q12")


    // Q12 


    // Q13 

document.write("Q13")


var students  = ['ali' , 'sami' , 'yaha' , 'inam'];
var scores = [58 , 73 ,89 ,90];



for(i = 0 ; i <= 3 ; i++){
    document.write(`${students[i] }  ${scores[i]} <br> ` )
}


document.write("Q13")


    // Q13 





    // Q14

document.write("Q14")


let a = [12, 45,3,22,34,50];

stopValue = +prompt('')


for(i = 0 ; i < a.length ;i++){
    // console.log(a[i])
    if(a[i] === stopValue){
    break;
}
console.log(a[i])
}


document.write("Q14")


//    Q14



  //  Q15

document.write("Q15")


let A = [[1,2,3], [4,5,6] , [7,8,9]];

for (i = 0 ; i < A.length ; i++){
    
for (j = 0 ; j <= 2 ;j++ ){
    document.write(A[i][j])
}

} 


let B = [[1,2,3] , [4,5,6] , [7,8,9]];

for (i = 0 ; i < B.length ; i++){
   document.write("<br>")
    for (j = 0 ; j <= 2 ; j++){
        document.write(`${B[i][j]} `)
    }
    

} 


document.write("Q15")

  //  Q15





  // Q16


document.write("Q16")


let num = prompt("enter number")

 console.log(num)
for(let  i =  num; i > 0 ; i--){
console.log(` ${i-0.5}`)
}


document.write("Q16")

  // Q16



  
  // Q17

document.write("Q17")


  document.write("Q17 <br> <br>")

for (let  i = 0 ; i <=20 ; i++){
    if (i % 2 === 0 ){
        document.write(`${i} is even <br>` )
    }else{
        document.write(`${i} is odd <br>`)
    }
}

document.write("<br> Q17")



document.write("Q17")

  // Q17


    // Q18
    document.write("Q18")

    document.write("<br> Q18")




for ( i= 1 ; i <= 7; i++)

    document.write("<br> Q18")


    document.write("Q18")

    // Q18


    // Q19 


    document.write("<br> Q19 <br>")

for (let i = 6; i >= 0;i--){
    document.write("<br>")
    for(j = i ; j > 0 ; j--){
        document.write(   "* " )
    }
}

    document.write("<br> Q19")



    // Q19 




    // Q20(a)



    document.write("<br> Q20(a) <br>")

for (let  i = +prompt('jj') ; i < 6 ;i++){
    document.write("<br>")
    for (let j = 1 ; j<=5 ; j++){
        
        document.write(" * " );
    }
}



document.write("<br> Q20(a) <br>")






    // Q20(a)

    


    // Q20(b)

    document.write("<br> Q20(b) <br>")

    document.write("<br>")
for(let i = 1 ; i < 6 ;i++){
    for (let j = 1 ; j <=i  ; j++ ){
        document.write(" *");
    }
    document.write("<br>")
}

    document.write("<br> Q20(b) <br>")




    // Q20(b)



    // Q20(c)

    document.write("<br> Q20(c) <br>")
    
for  (let i = +prompt("enter") ; i>0 ; i--){
    document.write("<br>")
    for(j = i ; j>0 ; j--){
        document.write("*")
    }
}

    document.write("<br> Q20(c) <br>")




    // Q20(c)
























