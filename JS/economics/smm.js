//execute the equation
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');

    //conclude the equation
    if (var1 === ""){
        var missing1 = 1 / var2;
        results.textContent = missing1 
    } else if (var2 === ""){
        var missing2 = 1 / var1;
        results.textContent = missing2
    }
    
});


