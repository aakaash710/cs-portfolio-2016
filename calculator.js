

var number1 = document.getElementById("number1")
var operators = document.getElementById("operators")
var number2 = document.getElementById("number2")
var btn = document.getElementById("btn")
var answer = document.getElementById("answer")


 btn.addEventListener("click", function (){
     var num1 = number1.value;
     var num2 = number2.value;
     var operations = operators.value;

 /*checks to see if add operator is clicked and if yes then makes it so the add 
         operator works and adds number1 + number2 */
     if (operations === "1"){
        
       answer.innerHTML = parseInt(num1) + parseInt(num2);
    }

    else if (operations === "2"){
        answer.innerHTML = parseInt(num1) - parseInt(num2);
    }

    else if (operations === "3"){
        answer.innerHTML = parseInt(num1) * parseInt(num2);
    }
    else if (operations === "4"){
        answer.innerHTML = parseInt(num1) / parseInt(num2);
    }

    else if (operations === "5"){
        answer.innerHTML = Math.pow(parseInt(num1),parseInt(num2));
    }

    else if (operations === "6"){
        answer.innerHTML = parseInt(num1) % parseInt(num2);
    }



});


