//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var v1 = var1 * 1;
    var alpha = 1 - var3;
    var alpha1 = alpha * var2;
    var omega = var4 * var5;
    var beta = v1 + omega;
    var beta1 = beta / var2;
    var gamma = var1 - alpha1;
    var gamma1 = gamma / var4;
    var gamma2 = gamma / var5;

    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha1 - omega;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = beta / alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta1 - 1.00;
        results.textContent = missing3 * -1.00
    } else if (var4 === ""){
        var missing4 = gamma2;
        results.textContent = missing4 * -1.00
    } else if (var5 === ""){
        var missing5 = gamma1;
        results.textContent = missing5 * -1.00
    }
});

