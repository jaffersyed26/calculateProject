//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var alpha = var1 / (var3 * var4 * var5);
    var omega = var1 / (var2 * var4 * var5);
    var beta = var1 / (var2 * var3 * var5)
    var beta2 = var1 / (var3 * var4 * var2)


    //conclude the equations
    if(var1 === ""){
        var missing1 = var2 * var3 * var4 * var5;
        results.textContent = missing1 
    } else if (var2 === ""){
        var missing2 = alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = omega;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = beta;
        results.textContent = missing4
    } else if (var5 ===""){
        var missing5 = beta2;
        results.textContent = missing5
    }
});

