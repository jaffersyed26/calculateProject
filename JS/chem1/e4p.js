//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var alpha1 = 4 * 3.14159;
    var alpha2 = alpha1 * var2;
    var alpha = 1 / alpha2;
    var omega1 = var3 * var4;
    var omega = omega1 / var5;
    var beta = var1 / omega;
    var gamma = beta * alpha1;
    var gamma1 = var1 / alpha;
    var gamma2 = gamma1 * var5;


    //conclude the equation
    if(var1 === ""){
        var missing1 = alpha * omega;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = 1 / gamma;
        results.textContent = missing2;
    } else if (var3 === ""){
        var missing3 = gamma2 / var4;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = gamma2 / var3;
        results.textContent = missing4
    } else if (var5 === ""){
        var missing5 = omega1 / gamma1;
        results.textContent = missing5
    }
  
});



