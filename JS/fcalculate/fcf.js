//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var var6 = document.querySelector('#variable6').value;
    var results = document.querySelector('#result');
    var variable4 = var4 * 1;
    var variable1 = var1 * 1;
    var variable5 = var5 * 1;
    var variable6 = var6 * 1;
    var alpha1 = 1 - var3;
    var alpha2 = var2 * alpha1;
    var alpha = alpha2 + variable4;
    var gamma = variable5 + variable6;
    var gamma1 = variable1 + gamma;
    var gamma2 = gamma1 - var4;
    var gamma3 = gamma2 / alpha1;
    var beta = gamma2 / var2;
    var beta1 = beta - 1;
    var beta2 = beta1 * -1.00 
    var omega =  gamma1 - alpha2;
    var step1 = var1 - alpha;
    var step2 = step1 + variable6;
    var step3 = step2 * -1.00;
    var step4 = step1 + variable5;



    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha - gamma;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = gamma3;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta2;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 =  omega;
        results.textContent = missing4 
    } else if (var5 === ""){
        var missing5 = step3;
        results.textContent = missing5
    } else if (var6 === ""){
        var missing6 = step4 * -1.00;
        results.textContent = missing6
    } 
});

