//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var results = document.querySelector('#result');
    var variable1 = var1 * 1;
    var variable3 = var3 * 1;

; 
    //conclude the equation 
    if(var1 === ""){
        var missing1 = var2 - var3;
        results.textContent = missing1
    } else if(var2 === ""){
        var missing2 = variable1 + variable3;
        results.textContent = missing2
    } else if(var3 === ""){
        var missing3 = var2 - var1;
        results.textContent = missing3
    }
 
});


