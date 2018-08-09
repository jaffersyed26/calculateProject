//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var alpha = var2 * var3;
    var beta = 8.314 * var4;
    var gamma = var1 * beta;
    var omega = var1 * 8.314;


    //conclude the equation
    if(var1 === ""){
        var missing1 = alpha / beta;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = gamma / var3;
        results.textContent = missing2
    } else if(var3 === ""){
        var missing3 = gamma/var2;
        results.textContent = missing3
    } else if(var4 === ""){
        var missing4 = alpha / omega;
        results.textContent = missing4
    }
  
});



