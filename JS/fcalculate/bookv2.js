//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var var5 = document.querySelector('#variable5').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable4 = var4 * 1;
    var alpha = var3 - var4;
    var alpha1 = variable2 + alpha;
    var gamma = var1 * var5;
    var gamma1 = gamma - var2;

    //conclude the equation
    if (var1 === ""){
        var missing1 = alpha1 / var5;
        results.textContent = missing1
    } else if (var2 === "") {
        var missing2 = gamma - alpha;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = gamma1 + variable4;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = gamma1 - var3;
        results.textContent = missing4 * -1.00;
    } else if (var5 === ""){
        var missing5 = alpha1 / var1;
        results.textContent = missing5
    }
    
 
});


