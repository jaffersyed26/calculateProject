//execute the equation
document.querySelector('#button').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var variable5 = var5 * 1;
    var alpha = variable3 + variable4 + variable5;
    var omega = variable4 + variable5;
    var beta = var1 * omega;
    var gamma = var2 - beta;
    var gamma1 = variable3 + variable5;
    var gamma2 = var1 * gamma1;
    var gamma3 = var2 - gamma2;
    var gamma4 = variable3 + variable4;
    var gamma5 = var1 * gamma4;
    var gamma6 = var2 - gamma5;

    //conclude the equation 
    if(var1 === ""){
        var missing1 = var2 / alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 * alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = gamma / var1;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = gamma3 / var1;
        results.textContent = missing4 
    } else if (var5 === ""){
        var missing5 = gamma6 / var1;
        results.textContent = missing5
    }
 
});


