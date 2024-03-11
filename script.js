const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const numberCheck = (num) =>{
    let numberMsg = "";
    switch (true) {
        case num == "":
            numberMsg = "Please enter a valid number";
            break;
        case num <= 1:
            numberMsg = "Please enter a number greater than or equal to 1";
            break;
        default :
            break;
    }
}