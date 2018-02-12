// Declaring Global Variable 

let my_Wins = 0 , my_Losess= 0 , my_Guess_Left= 9 ,my_Guess_Sofar= [" "] ;
var sys_Gen_Alpha = randomAlpha() ; var no_Times = 1;



// F(x) to get system generated Alphabet

 function randomAlpha() 
  {

   var index = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   var rNum = Math.floor(Math.random() * possible.length);
   randomAlpha = possible.substring(rNum,rNum+1);
          
       return (randomAlpha);
  }


// Event that triggers the game function

    document.onkeyup = function(event) {
      
     var x = event.keyCode; 
     my_User_Alpha = String.fromCharCode(x);
    
    
     if (my_User_Alpha === sys_Gen_Alpha) 
        {

         my_wins++;

        }
      else
        {
        
         my_Losess ++; 

        }

       my_Guess_Left --;
       my_Guess_Sofar.push(my_User_Alpha);   
       no_Times++;

// if 9 chances are exhausted , then need to reset the variables and get a new system generated alphabet.

      if (no_Times > 10) 
      {
       
      alert("Game Over ! , 9 Chances only per game ! . The computer was in love with --> : " + sys_Gen_Alpha);

       my_wins = 0; 
       my_Losess = 0;
       my_Guess_Sofar = ''
       my_User_Alpha = ''
       sys_Gen_Alpha = ''
       sys_Gen_Alpha = randomAlpha(); 

      }

 
// manipulate the DOM elements of the HTML

    document.getElementById("text_Win").innerHTML = "Wins :" + my_Wins ;
    document.getElementById("text_Lose").innerHTML = "Losses :" + my_Losess ;
    document.getElementById("text_Guess").innerHTML = "Guesses Left :" + my_Guess_Left ;
    document.getElementById("text_Guess_sofar").innerHTML = "You Guess So Far:" + my_Guess_Sofar ;

    }
