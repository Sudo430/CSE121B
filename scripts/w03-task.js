/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2
}

function addNumbers(){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").setAttribute("value",add(add1, add2))
}

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2){return num1 - num2}

function subtractNumbers(){
    let num1 = Number(document.querySelector("#subtract1").value);
    let num2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").setAttribute("value",subtract(num1, num2))
}
/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

function multiplyNumbers(){
    let num1 = Number(document.querySelector("#factor1").value);
    let num2 = Number(document.querySelector("#factor2").value);
    
    document.querySelector("#product").setAttribute("value", multiply(num1, num2))
}

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1 / num2;

function divideNumbers(){
    let num1 = Number(document.querySelector("#dividend").value);
    let num2 = Number(document.querySelector("#divisor").value);
    
    document.querySelector("#quotient").setAttribute("value", divide(num1, num2))
}
/* Decision Structure */
function decisionStructure(){
    console.log("pressed the button")
    let subtotal = document.querySelector("#subtotal").value
    console.log(subtotal)

    let member = document.querySelector("#member")
    console.log(member.checked)

    if(member.checked){
        console.log("20% discount")
        document.querySelector("#total").innerHTML = `$ ${(subtotal - subtotal * 0.2).toFixed(2)}`
    }
    else{
        console.log("no discount")
        document.querySelector("#total").innerHTML = `$ ${subtotal}`
    }
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let sourceArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector("#array").innerHTML = sourceArray
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = sourceArray.filter((num) => num % 2 === 1)
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = sourceArray.filter((num) => num % 2 === 0)
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = sourceArray.reduce((total, num) => total += num) 
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = sourceArray.map((num) => num * 2) 
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = sourceArray.map((num) => num * 2).reduce((total, num) => total += num) 

document.querySelector("#addNumbers").addEventListener('click', addNumbers)
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers)
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers)
document.querySelector("#getTotal").addEventListener('click', decisionStructure)