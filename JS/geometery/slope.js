//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable4 = var4 * 1; 
    var alpha = var2 * var3;
    var omega = var1 - var4;
    var beta = var1 - alpha;
   

    //conclude the equation 
    if (var1 === ""){
        var missing1 = alpha + variable4;
        results.textContent = missing1
    } else if (var2 === "") {
        var missing2 = omega / var3;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = omega / var2;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = beta;
        results.textContent = missing4
    }
    
 
});


