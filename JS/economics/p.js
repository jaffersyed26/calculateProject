//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable3 = var3 * 1;
    var alpha = var2 - var3;
    var omega = var1 / var4;
    var omega1 = omega + variable3;
    var gamma = omega - var2;

    //conclude the equation
    if(var1 === ""){
        var missing1 = alpha * var4;
        results.textContent = missing1
    }  else if (var2 === ""){
        var missing2 = omega1;
        results.textContent = missing2
    }  else if (var3 === ""){
        var missing3 = gamma
        results.textContent = missing3 * -1.00
    }  else if (var4 === ""){
        var missing4 = var1 / alpha;
        results.textContent = missing4
    }
    
});


