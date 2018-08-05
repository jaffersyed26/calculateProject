//execute the equation
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var results = document.querySelector('#result');
    var variable2 = var2 * 1;

  
    //conclude the equation
  if(var1 === ""){
      var missing1 = variable2 + 273.15;
      results.textContent = missing1
  } else if(var2 === ""){
      var missing2 = var1 - 273.15;
      results.textContent = missing2
  }
});



