//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var variable4 = var4 * 1;
    var results = document.querySelector('#result');
    var alpha = var3 - var4;
    var gamma = var2 * alpha;
    var beta = var1 / var2;


    //conclude the equation
    if(var1 === ""){
        var missing1 = gamma;
        results.textContent = missing1 
    } else if (var2 === ""){
        var missing2 = var1 / alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta + variable4;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = var3 - beta;
        results.textContent = missing4
    }
 
});


