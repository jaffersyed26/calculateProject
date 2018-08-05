//execute the equation
//GO BACK AND EDIT
document.querySelector('#button2').addEventListener('click', function(){
    var var1 = document.querySelector('#variable1').value;
    var var2 = document.querySelector('#variable2').value;
    var result = document.querySelector('#result');
 

    //conclude the equation
    if (var1 === "") {
      var missingT = 0.6931471805599453/var2;
      result.textContent = missingT
    } else if(var2 === ""){
      var missingK = 0.6931471805599453/var1;
      result.textContent = missingK
    }
});


