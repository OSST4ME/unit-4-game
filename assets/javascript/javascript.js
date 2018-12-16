
$(".btn-lg").on("click", function() {

  randomNumber = Math.floor(Math.random() * 120 +19);
}

  var num1= Math.floor(Math.random()*12+1);
  var num2= Math.floor(Math.random()*12+1);
  var num3= Math.floor(Math.random()*12+1);
  var num4= Math.floor(Math.random()*12+1);
 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

  $('#randomNumber').text(random);
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  $(document).ready(function(){

  $('#image1').on("click", function() {

    userTotal = userTotal + num1};
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
      if (userTotal === Random){
          win()
        }

      else if ( userTotal > Random){

          lose()
        }   
  })  
  
  $('#image2').on("click", function() {

    userTotal = userTotal + num2};
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

      if (userTotal === Random){
          win()
        }

      else if ( userTotal > Random){
          lose()
        } 
  })  

  $('#image3').on("click", function() {

    userTotal = userTotal + num3};
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

      if (userTotal === Random){
          win()
        }

      else if ( userTotal > Random) {

          lose()
        } 
  })  

  $('#image4').on("click", function() {

    userTotal = userTotal + num4};
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
      if (userTotal === Random){
          win()
        }

      else if ( userTotal > Random) {
        
          lose()
        }
  });   

  function win() {

    alert("You win!")};
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function lose() {

    alert ("You lose!");
    losses++;
    $('#numberLosses)'.text(losses);
    reset()
  } 

  function reset(){

    randomNumber= Math.floor(Math.random() * 120 +19);
    console.log(random);

    $('#randomNumber').text(random);

    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);

    var userTotal= 0;

    $('#finalTotal').text(userTotal);
  }


</script>
  