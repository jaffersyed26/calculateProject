//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variableBeta = 8.314 * var3;
    var variableOmega = Math.pow(variableBeta, var4)
    var variableAlpha = var1/var2;
 ;

    //conclude the equations
    if(var1 === ""){
        var missingKp = var2 * variableOmega;
        results.textContent = missingKp
    } else if (var2 === "") {
        var missingKc = var1 / variableOmega;
        results.textContent = missingKc
    } else if (var3 === ""){
        var missingT = Math.pow(variableAlpha, (1/var4))/8.314;
        results.textContent = missingT
    } else if (var4 === ""){
        var missingN = Math.log(variableAlpha) / Math.log(variableBeta);
        results.textContent = missingN
    }
 
});


