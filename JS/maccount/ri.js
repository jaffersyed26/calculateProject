document.querySelector('#button').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var alpha = var3 * var4;
    var beta = var1 - var2;

    //conclude the equation
    if (var1 === ""){
        var missing1 = var2 - alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = variable1 + alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta / var4;
        results.textContent = missing3 * -1.00
    } else if (var4 === ""){
        var missing4 = beta / var3;
        results.textContent = missing4 * -1.00
    }
 
});

//fix when you get back

