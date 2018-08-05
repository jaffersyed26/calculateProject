//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var variable3 = var3 * 1;
    var variable5 = var5 * 1;
    var alpha1 = var2 - var3;
    var alpha2 = Math.pow(alpha1 , 2);
    var alpha3 = var4 - var5;
    var alpha4 = alpha2 + alpha3;
    var alpha = Math.pow(alpha4, 0.5);
    var omega1 = Math.pow(var1 , 2);
    var omega2 = omega1 - alpha3;
    var omega3 = Math.pow(omega2 , 0.5);
    var omega = omega3 + variable3;
    var beta = omega3 - var2;
    var gamma1 = omega1 - alpha2;
    var gamma2 = gamma1 + variable5;
    var gamma3 = gamma1 - var4;
    var gamma4 = gamma3 * -1.00;

    //conclude the equation 
    if (var1 === ""){
        var missing1 = alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = omega;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta * -1.00;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = gamma2;
        results.textContent = missing4
    } else if (var5 === ""){
        var missing5 = gamma4;
        results.textContent = missing5
    }
    
 
});


