document.querySelector('#button').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var omega = var2 - var3;
    var gamma = variable2 + variable4;
    var gamma1 = var1 - gamma;
    var alpha = variable3 + variable4;
    var beta = variable2 + variable4;

    //conclude the equation
    if(var1 === ""){
        var missing1 = var2 - var3 + variable4;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = (variable3 + variable1) - variable4;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = ((variable1 - variable2) - variable4) / -1.00;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = var1 - omega;
        results.textContent = missing4
    }
 
});

//fix when you get back

