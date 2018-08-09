//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha = 0.5 * var2;
    var omega = Math.pow(var3 , 2);
    var beta = var1 / alpha;
    var gamma = var1 / omega;

    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha * omega;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = gamma / 0.5;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = Math.pow(beta , 0.5);
        results.textContent = missing3
    }
   
    
});


