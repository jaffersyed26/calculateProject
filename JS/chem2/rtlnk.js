//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var variable1 = var1 * 1;
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var results = document.querySelector('#result');
    var varR = - 8.314;
    var varLogFunction = Math.log(variable3);
    var varmultiply = varR * varLogFunction;
    var varRT = varR * variable2;
    //conclude the equations
    //ΔG = -RTlnK 
    if (var1 === ""){
        //delta G is missing
        var missingG = varR * variable2 * varLogFunction;
        results.textContent = missingG
    } else if(var2 === ""){
        var missingT = variable1 / varmultiply;
        results.textContent = missingT;
    } else if (var3 === ""){
        var missingK = Math.exp(variable1 / varRT);
        results.textContent = missingK
    }
});
