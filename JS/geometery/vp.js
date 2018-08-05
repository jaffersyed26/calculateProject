//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha1 = var2 * var3;
    var alpha = 0.33333333333 * alpha1;
    var gamma = 0.33333333333 * var2;
    var omega = 0.33333333333 * var3;

    if(var1 === ""){
        var missing1 = alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = var1 / omega;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = var1 / gamma;
        results.textContent = missing3
    }
    
 
});


