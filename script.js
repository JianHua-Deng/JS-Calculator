const equal = document.querySelector(".equal");
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

function isOperator(c){
    return (c == '+' || c == '-' || c == '*' || c == '/' || c == '%');

}

function displayEntered(){

    if(this.className == "nums"){
        if(operator == ''){
            firstOperand += this.textContent;
        }else{
            secondOperand += this.textContent;
        }
        result.textContent += this.textContent;
    }else{
         if(operator == '' || secondOperand == ''){
            operator = this.textContent;
            
            if(isOperator(result.textContent.charAt(result.textContent.length - 1))){
                //replace the last char in enteredContents to the newly pressed operator
                result.textContent = result.textContent.slice(0, -1) + this.textContent;
            }else{
                result.textContent += this.textContent;
            }

         }else{
            //if firstOperand and secondOperand already has number, and operator alraedy has a operator, calculates them
            firstOperand = String(calculations());
            operator = this.textContent;
            secondOperand = '';
            result.textContent = firstOperand + operator;
         }
    }
    //console.log(firstOperand + " " + operator + " " + secondOperand);

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
    result.textContent = result.textContent.substring(0, result.textContent.length - 1);

    if(secondOperand.length > 0){
        secondOperand = secondOperand.substring(0, secondOperand.length - 1);

    }else if (operator.length > 0){
        operator = '';

    }else{
        if(firstOperand.length > 0){
            firstOperand = firstOperand.substring(0, firstOperand.length - 1);
        }
    }
}

function equalOperation(){
    if(firstOperand != '' && operator != '' && secondOperand != ''){
        firstOperand = String(calculations());
        operator = '';
        secondOperand = '';
        result.textContent = firstOperand;
    }

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