
    $(document).ready(function(){
       var randomNumber = Math.floor(Math.random() * 120 +19)
      
       $('#randomNumber').text(random);

  $(".btn-lg").on("click", function() {

    var num1= Math.floor(Math.random()*12+1);
    var num2= Math.floor(Math.random()*12+1);
    var num3= Math.floor(Math.random()*12+1);
    var num4= Math.floor(Math.random()*12+1);
   
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset(){
      random= Math.floor(Math.random() * 120 +19);
      console.log(random);
      $('#randomNumber').text(random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*12+1);
      num3= Math.floor(Math.random()*12+1);
      num4= Math.floor(Math.random()*12+1);
      var playerTotal= 0;
      $('#totalScore').text(playerTotal);
    }

    function woohoo() {
      alert("You win!")};
      wins++; 
      $('#wins').text(wins);
      reset();
    }
  
    function loser() {
      alert ("You lose!");
      losses++;
      $('#losses)'.text(losses);
      reset()
    } 

    $('#image1').on ('click', function() {
''      playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
            
          if (playerTotal === random){
            woohoo()
          }

          else if ( playerTotal > random){

            loser()
          }   
    })  
    
    $('#image2').on('click', function() {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

          if (playerTotal === random){
            woohoo()
          }

          else if ( playerTotal > random){
            loser()
          } 
    })  

    $('#image3').on ('click', function() {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
 
          if (playerTotal === random){
            woohoo()
          }

          else if ( playerTotal > random) {

            loser()
          } 
    })  

    $('#image4').on ('click', function() {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal); 
        
          if (playerTotal === random){
            woohoo()
          }

          else if ( playerTotal > random) {
          
            loser()
          }
    });   
   