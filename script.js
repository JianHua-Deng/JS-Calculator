const equal = document.querySelector(".equal");
const enteredContents = document.querySelector(".entered");
const result = document.querySelector(".entered");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

var firstOperand = '';
var secondOperand = '';
var operator = '';

const buttonList = document.querySelectorAll(".nums, .operators");
buttonList.forEach(element => {
    element.addEventListener("click", displayEntered);    
});

function displayEntered(){

    if(this.className == "nums"){
        if(operator == ''){
            firstOperand += this.textContent;
        }else{
            secondOperand += this.textContent;
            //console.log("runs me");
        }
        result.textContent += this.textContent;
    }else{
         if(operator == '' || secondOperand == ''){
            operator = this.textContent;
            result.textContent += this.textContent;
         }else{
            //if firstOperand and secondOperand already has number, and operator alraedy has a operator, calculates them
            firstOperand = calculations()
            operator = this.textContent;
            secondOperand = '';
            result.textContent = firstOperand + operator;
            //console.log(firstOperand + " Runs calculations");
         }
    }
    console.log(firstOperand + " " + operator + " " + secondOperand);

    /*
    if(enteredContents.textContent == "0"){
        enteredContents.textContent = this.textContent;
    }else{
        //if this.id is a operator, and the last character of the enteredContents is also a operator
        if(this.id == "operators" && isOperator(enteredContents.textContent.charAt(enteredContents.textContent.length - 1))){
            //replace the last char in enteredContents to the newly pressed operator
            enteredContents.textContent = enteredContents.textContent.slice(0, -1) + this.textContent;
        }else{
            enteredContents.textContent += this.textContent;
        }
    }
    */

}

function calculations(){
    switch(operator){
        case '+':
            return (parseFloat(firstOperand) + parseFloat(secondOperand));
        case '-':
            return (parseFloat(firstOperand) - parseFloat(secondOperand));
        case '*':
            return (parseFloat(firstOperand) * parseFloat(secondOperand));
        case '/':
            return (parseFloat(firstOperand) / parseFloat(secondOperand));
        case '%':
            return (parseFloat(firstOperand) % parseFloat(secondOperand));
    }
}

function removeChar(){
    enteredContents.textContent = enteredContents.textContent.substring(0, enteredContents.textContent.length - 1);
    if(secondOperand != ''){
        secondOperand = secondOperand.substring(0, secondOperand.length - 1);
    }else if (operator != ''){
        operator = '';
    }else{
        firstOperand = firstOperand.substring(0, firstOperand.length - 1);
    }
}

function equalOperation(){
    let ans = ''
    if(firstOperand != '' && operator != '' && secondOperand != ''){
        ans = calculations()
    }
    result.textContent = ans;
}

function clear(){
    result.textContent = "";
    firstOperand = '';
    operator = ''
    secondOperand = ''
}

clearButton.addEventListener("click", clear);
delButton.addEventListener("click", removeChar);
equalButton.addEventListener("click", equalOperation);