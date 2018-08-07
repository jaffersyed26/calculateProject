//execute the equation
//FLAGGED NOT FINISHED 

document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var variable1 = var1 * 1;
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var omega = var3 * var4;
    var beta = variable1 - variable2;
    var results = document.querySelector('#result');


    //conclude the equations
    if(var1 === ""){
        var missing1 = var2 - omega;
        results.textContent = missing1 
    } else if (var2 === ""){
        var missing2 = variable1 + omega;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta / variable4;
        results.textContent = missing3 * -1.00
    } else if (var4 === ""){
        var missing4 = beta / variable3;
        results.textContent = missing4 * -1.00
    }
});

