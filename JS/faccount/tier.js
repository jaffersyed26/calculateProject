//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var alpha = variable2 + variable3 + variable4;
    var gamma  = variable3 + variable4;
    var gamma2 = variable2 + variable4;
    var gamma3 = variable2 + variable3;
    var gamma1 = var1 * var5;

    //conclude the equation 
    if (var1 === ""){
        var missing1 = alpha / var5;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = gamma1 - gamma;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = gamma1 - gamma2;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = gamma1 - gamma3;
        results.textContent= missing4
    } else if (var5 === ""){
        var missing5 = alpha / var1;
        results.textContent = missing5
    }
 
});


