const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputMsg = document.getElementById("output");


const numberCheck = (num) =>{
    //This function serves as the function for checking for errors
    let numberMsg = "";
    switch (true) {
        case num == "":
            numberMsg = "Please enter a valid number";
            break;
        case num < 1:
            numberMsg = "Please enter a number greater than or equal to 1";
            break;
        case num > 3999:
            numberMsg = "Please enter a number less than or equal to 3999";
            break;
        default :
            break;
    }
    return numberMsg;
}
const numPlotting = (number, rn1, rn4, rn5, rn9) => {
    number = parseInt(number);
    let numDifference;
    let romanFigure = "";
    switch (true) {
        case number == 0:
            romanFigure = romanFigure;
            break;
        case number == 1:
            romanFigure = romanFigure + rn1;
            break;
        case number > 1 && number < 4:
            numDifference = number - 1;
            for (let i = 0; i <= numDifference; i++) {
                romanFigure = rn1 + romanFigure;
            }
            break;
        case number == 4:
            romanFigure = romanFigure + rn1 + rn5;
            break;
        case number == 5:
            romanFigure = romanFigure + rn5;
            break;
        case number > 5 && number < 9:
            numDifference = number - 5;
            romanFigure = romanFigure + rn5;
            for (let i = 1; i <= numDifference; i++) {
                romanFigure = romanFigure + rn1;
            }
            break;
        case number == 9:
            romanFigure = romanFigure + rn9;
            break;
        default:
    }
    return romanFigure;
}

const romanNumeral = (number) => {
    let numString = number.toString();
    let numLength = numString.length;
    let finalAnswer= "";

    switch (numLength) {
        case 1:
            for (let i = 0; i < numLength; i++) {
                finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "I", "IV", "V", "IX");
            }
            break;
        case 2:
            for (let i = 0; i < numLength; i++) {
                if (i == 0){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "X", "XL", "L", "XC");
                }
                if (i == 1){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "I", "IV", "V", "IX");
                }
            }
            break;
        case 3:
            for (let i = 0; i < numLength; i++) {
                if (i == 0){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "C", "CD", "D", "CM");
                }
                if (i == 1){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "X", "XL", "L", "XC");
                }
                if (i == 2){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "I", "IV", "V", "IX");
                }
            }
            break
        case 4:
            for (let i = 0; i < numLength; i++) {
                if (i == 0){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "M");
                }
                if (i == 1){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "C", "CD", "D", "CM");
                }
                if (i == 2){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "X", "XL", "L", "XC");
                }
                if (i == 3){
                    finalAnswer = finalAnswer + numPlotting(parseInt(numString[i]), "I", "IV", "V", "IX");
                }
            }
            break;
        default:
            break;
    }
    return finalAnswer;
}

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (numberInput.value == "" || numberInput.value < 1 || numberInput.value > 3999) {
        outputMsg.innerHTML = numberCheck(numberInput.value);
        outputMsg.style.display = "block";
        outputMsg.classList.add("error");
        outputMsg.classList.remove("success");
    }else{
        outputMsg.innerHTML = romanNumeral(numberInput.value);
        outputMsg.style.display = "block";
        outputMsg.classList.add("success");
        outputMsg.classList.remove("error");
    }   
})