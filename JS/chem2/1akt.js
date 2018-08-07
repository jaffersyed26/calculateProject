//execute the equation
//GO BACK AND EDIT
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var var4 = document.querySelector('#variable4').value;
    var result = document.querySelector('#result');
    var omega = var2 * var3;
    var alpha = 1 / var1;
    var beta = 1 / var4;
   
    //conclude the equation
    if(var1 === ""){
        var missing1 = omega + beta;
        result.textContent = 1 / missing1
    } else if(var2 === "") {
        var missing2 = (alpha - beta) / var3;
        result.textContent = missing2
    } else if(var3 === ""){
        var missing3 = (alpha - beta) / var2;
        result.textContent = missing3
    } else if (var4 === ""){
       var missing4 = 1 / (alpha - omega);
       result.textContent = missing4
    }
});


