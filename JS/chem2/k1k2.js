//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var omega = Math.log(var1 / var2);
    var omega1 = (-1.00 * var3) / 8.314;
    var alpha = (1 / var4)-(1 / var5);
    var beta = omega1 * alpha;
    var beta1 = omega / omega1;
    var combo = omega / alpha;
    var t1 = 1 / var4;
    var t2 = 1 / var5;
    var combo1 = beta1 + t2;
    var combo2 = beta1 - t1;

    //conclude the equations
    if (var1 === ""){
        var missing1 = var2 * Math.exp(beta);
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 / Math.exp(beta);
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = combo * 8.314;
        results.textContent = missing3 * -1.00;
    } else if (var4 === ""){
        var missing4 = 1/ combo1;
        results.textContent = missing4
    } else if (var5 === "") {
        var missing5 = -1 / combo2;
        results.textContent = missing5
    }
 
});


