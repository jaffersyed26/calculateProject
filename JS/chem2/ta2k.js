//execute the equation
//GO BACK AND EDIT
document.querySelector('#button1').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var var3 = document.querySelector('#variable3').value;
    var result = document.querySelector('#result');
    var omega = var2 / var1;

    //conclude the equation
    if (var1 === "") {
      var missing1 = var2 / (var3 * 2);
      result.textContent = missing1
    } else if (var2 === "") {
      var missing2 = (var3 * 2) * var1;
      result.textContent= missing2 
    } else if (var3 === "") {
      var missing3 = omega / 2;
      result.textContent = missing3
    }
});



