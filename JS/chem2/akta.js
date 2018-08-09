//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var variableAlpha =  -1.00 * variable2;
    var variableAlpha2 = variableAlpha * variable3;
    var variableOmega = variable1 / variable3 * -1.00;

    //conclude the equations
    if(var1 === ""){
        var missingAt = variableAlpha2 + variable4;
        results.textContent = missingAt
    } else if (var2 === "") {
        var missingK = (variable4 - variable1) / variable3;
        results.textContent = missingK
    } else if (var3 === "") {
        var missingT = (variable4 - variable1) / variable2;
        results.textContent = missingT
    } else if (var4 === "") {
        var missingAo = variable1 - variableAlpha2;
        results.textContent = missingAo
    }
});







