//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var alpha = -2.18 * Math.pow(10 , -18);
    var omega1 = 1/ var3;
    var omega2 = 1/ var4;
    var omega = omega1 - omega2;  
    var beta = omega * alpha;
    var gamma1 = alpha * var2;
    var gamma2 = var1 / gamma1;
    var gamma = omega2 + gamma2;
    var gamma3 = gamma2 - omega1;

    //conclude the equation
    if(var1 === ""){
        var missing1 = alpha * var2  * omega;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 / beta;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = 1/ gamma;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = 1/ gamma3;
        results.textContent = missing4 * -1.00;
    }
  
});



