document.querySelector('#button').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var alpha = variable2 + variable3;
    var alpha1 = alpha / var4;
    var beta = var1 * var4;

    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha1;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = beta - var3;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = beta - var2;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = alpha / var1;
        results.textContent = missing4
    }
 
});

//fix when you get back

