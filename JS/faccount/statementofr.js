//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var alpha = var3 - var4;
    var omega = var2 - var4;
    var beta = variable2 + variable3;

 
    //conclude the equation 
    if(var1 === "") {
        var missing1 = variable2 + variable3 - var4;
        results.textContent = missing1  
    }  else if (var2 === ""){
        var missing2 = var1 - alpha;
        results.textContent = missing2
    } else if(var3 === ""){
        var missing3 = var1 - omega;
        results.textContent = missing3
    } else if (var4 === ""){
        var missing4 = beta - var1;
        results.textContent = missing4
    }
 
});


