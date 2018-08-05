//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha = 3.141592653589793238 * 2;
    var omega = Math.pow(var2 , 2);
    var beta = alpha * var3;
    var beta1 = Math.pow(beta , 2);
    var beta2 = 4 * alpha * (-1.00 * var1);
    var gamma = beta1 - beta2;
    var gamma1 = Math.pow(gamma , 0.5);
    var gamma2 = 2 * alpha;
    var gamma3 = -1.00 * beta;
    var omega1 = alpha * omega;
    var omega2 = var1 - omega1;
    var omega3 = alpha * var2;
    var omega4 = omega2 / omega3;

    //conclude the equation
    if (var1 === ""){
        var missing1 = (alpha * var2 * var3) + omega1;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing21 = (gamma3 + gamma1) / gamma2;
        var missing22 = (gamma3 - gamma1) / gamma2;
        results.textContent = missing21 + " , " + missing22
    } else if (var3 === ""){
        var missing3 = omega4;
        results.textContent = missing3
    }

    
    
 
});


