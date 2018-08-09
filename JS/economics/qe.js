//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var alpha = var1 * var2;
    var omega = var3 * var4;
 

    //conclude the equation
    if(var1 === ""){
        var missing1 = omega / var2;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = omega / var1;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = alpha / var4;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = alpha / var3;
        results.textContent = missing4
    }
});


