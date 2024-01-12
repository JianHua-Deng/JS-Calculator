const equal = document.querySelector(".equal");
const enteredContents = document.querySelector(".entered");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector(".delete");

const buttonList = document.querySelectorAll(".nums, .mod, .divide, .times, .minus, .add, .dot");
buttonList.forEach(element => {
    element.addEventListener("click", displayEntered);    
});

function displayEntered(){
    if(enteredContents.textContent == "0"){
        enteredContents.textContent = this.textContent;
    }else{
        enteredContents.textContent += this.textContent;
    }
}

function calculations(){
    
}

function removeChar(){
    if(enteredContents.textContent.length - 1 == 0){
        enteredContents.textContent = "0";
    }else{
        enteredContents.textContent = enteredContents.textContent.substring(0, enteredContents.textContent.length - 1);
    }
}

function clear(){
    enteredContents.textContent = "0";
    result.textContent = "";
}

clearButton.addEventListener("click", clear);
delButton.addEventListener("click", removeChar);