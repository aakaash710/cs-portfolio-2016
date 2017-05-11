    var score = 0;
    var btn = document.getElementById("Submit");
    var scoring = document.getElementById("score");
    
    // handles when the Submit button is clicked
    btn.addEventListener("click", function() {
        // stores all the clicked radio buttons in an array
        var radios = document.querySelectorAll('input[type="radio"]:checked');
        
       
        for (var i = 0; i < radios.length; i++) {
            // adds the quiz-complete class to the parent of the radio buttons
            radios[i].parentNode.className += " quiz-complete";
    
            if (radios[i].value == "1") {
                // highlights the answers green if answer is correct
                radios[i].parentNode.style.backgroundColor = "lightgreen";
                score++;
            }
            else {
                //highlights the answers red if answer is incorrect
                radios[i].parentNode.style.backgroundColor = "red";
            }
        }
        //Displays score on screen after Submit button is clicked
        scoring.innerHTML = score + " /21 ";
    });
