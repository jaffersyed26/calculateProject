//execute the equation
//GO BACK AND EDIT
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var result = document.querySelector('#result');
    //conclude the equation
   
    if (var1 === "") {
        var missingS = var2 * -1.00 / var3;
        result.textContent = missingS
    } else if(var2 === ""){
        var missingH = var1 * var3;
        result.textContent = missingH * -1.00
    } else if(var3 === ""){
        var missingT = var2 / var1;
        result.textContent = missingT * -1.00
    }
});


