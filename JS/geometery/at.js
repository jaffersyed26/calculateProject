//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var alpha = 0.5 * var2;
    var beta = variable3 + variable4;

    //conclude the equation 
    if (var1 === ""){
        var missing1 = alpha * beta;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = (var1 / beta) / 0.5;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = (var1 / alpha) - var4;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = (var1 / alpha) - var3;
        results.textContent = missing4
    }
    
    
 
});


