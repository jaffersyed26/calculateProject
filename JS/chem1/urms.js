//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var alpha1 = 3 * 8.314 * var2;
    var alpha2 = alpha1 / var3;
    var alpha = Math.pow(alpha2 , 0.5);
    var beta = 3 * 8.314;
    var gamma = Math.pow(var1 , 2)
    var omega = gamma * var3;

  
    //conclude the equation
    if(var1 === ""){
        var missing1 = alpha;
        results.textContent = missing1
    } else if (var2 === ""){
        var missing2 = omega / beta;
        results.textContent = missing2
    } else if (var3 === ""){
        var missing3 = alpha1 / gamma;
        results.textContent = missing3
    }
});



