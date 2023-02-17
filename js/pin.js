document.getElementById('generate-pin').addEventListener('click', function(){
    const pinField = document.getElementById('pin-field');
    const pinValidationZ = pinValidation();
    pinField.value = pinValidationZ;
});
document.getElementById('button-event').addEventListener('click', function(event){
    const amrName = document.getElementById('input-field');
    const amrNameValue = amrName.value;
    const tmrName = event.target.innerText;
    if(isNaN(tmrName)){
        if(tmrName === 'C'){
            amrName.value = '';
        }
        else if(tmrName === '<'){
            const newTerm = amrNameValue.split('');
            newTerm.pop();
            amrName.value = newTerm.join('');
        }
    }
    else{
        const totalName = amrNameValue + tmrName;
        amrName.value = totalName;
    }
});

document.getElementById('pin-submit').addEventListener('click', function(){
    const pinField = commonValue('pin-field');
    const amrName = commonValue('input-field');
    if(pinField == amrName){
        document.getElementById('success').style.display ='block';
        document.getElementById('failure').style.display ='none';
    }
    else{
        document.getElementById('failure').style.display ='block';
        document.getElementById('success').style.display ='none';
    }
})