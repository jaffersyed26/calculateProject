//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var v1 = var1 * 1;
    var v4 = var4 * 1;
    var alpha = var2 * var3;
    var beta = v1 + v4;
    var omega = var1 - alpha;

    
    //conclude the equation 
    if (var1 === ""){
        var missing1 = alpha - var4;
        results.textContent = missing1 
    } else if (var2 === "") {
        var missing2 = beta / var3;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta / var2;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = omega + var4;
        results.textContent = missing4 * -1.00
    }
});

