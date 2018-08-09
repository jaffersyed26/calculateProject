//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha = Math.pow(var1 , 2);
    var beta = Math.pow(var2 , 2);
    var omega = Math.pow(var3 , 2);

   

    //conclude the equation 
    if (var1 === ""){
        var missing1 = Math.pow(omega - beta , 0.5);
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = Math.pow(omega - alpha, 0.5);
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = Math.pow(alpha + beta, 0.5);
        results.textContent = missing3
    }
    
 
});


