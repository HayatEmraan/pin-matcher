function pinValidation(){
    const getPin = pin();
        if(getPin/10000 >= 1){
            return getPin;
        }
        else{
            return pinValidation();
        }
}

function pin(){
    const numbers = Math.round(Math.random()*100000);
    return numbers;
}
function commonValue(elementId){
    const pinField = document.getElementById(elementId);
    const pinFieldValue = pinField.value;
    return pinFieldValue;
}
