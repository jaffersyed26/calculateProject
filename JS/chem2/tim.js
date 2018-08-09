//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var variable1 = var1 * 1;
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var results = document.querySelector('#result');

    //conclude the equations
    if(var1 === "") {
        var missingT = variable2 * variable3 * variable4;
        results.textContent = missingT
     } else if(var2 === "") {
         var missingKb = variable1 / (variable3 * variable4);
         results.textContent = missingKb
     } else if (var3 === "") {
         var missingI = variable1 / (variable2 * variable4);
         results.textContent = missingI
     } else if (var4 === "") {
         var missingM = variable1 / (variable2 * variable3);
         results.textContent = missingM
     }
});

