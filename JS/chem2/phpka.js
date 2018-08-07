//execute the equation
//GO BACK AND EDIT
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var result = document.querySelector('#result');
    var variable2 = var2 * 1;
    var variable3 = var3 * 1;
    var variable4 = var4 * 1;
    var omega1 = variable3 / variable4;
    var omega = Math.log10(omega1);
    var beta = var1 - var2;
    var gamma = Math.pow(10 , beta);

    //conclude the equation
    if(var1 === ""){
        var missing1 = variable2 + omega;
        result.textContent = missing1 
    } else if (var2 === ""){
        var missing2 = var1 - omega;
        result.textContent = missing2
    } else if (var3 === ""){
        var missing3 = gamma * var4;
        result.textContent = missing3
    } else if (var4 === ""){
        var missing4 = var3 / gamma;
        result.textContent = missing4
    }
});



