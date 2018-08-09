//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var alpha = var3 * var4;
    var beta = var2 * var4;
    var omega = var2 * var3;

    //conclude the equation
    if (var1 === ""){
        var missing1 = var2 * var3 * var4;
        results.textContent = missing1
    }  else if (var2 === "") {
        var missing2 = var1 / alpha;
        results.textContent = missing2
    }  else if (var3 === "") {
        var missing3 = var1 / beta;
        results.textContent = missing3
    }  else if (var4 === "") {
        var missing4 = var1 / omega;
        results.textContent = missing4
    }
   
    
});


