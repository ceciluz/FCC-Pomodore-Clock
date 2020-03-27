$(document).ready(function (){

  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breaknum").html());
  //console.log(count);
  $("#reset").hide();

  $("#start").click(function(){
    var counter = setInterval(timer,1000);
    count*=60;
    function timer(){
      $("#start, #minusSClock, #addSClock, #addSBreak,#minusBreak, #breaknum, #title, #title1").hide();
      $("#timetype").show();
      $("#timetype").html("Session Time: ");
      $("#reset").hide();
      count-=1;
      if(count === 0){
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
        }

        if(count%60>=10){
          $("#num").html(Math.floor(count/60)+":"+count%60);
        } else {
              $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
        }

      function breakTimer(){

      $("#breaknum").show();
      $("#timetype").show();
      $("#timetype").html("Break Time: ");
      breakTime -=1 ;

      if(breakTime === 0){
        clearInterval(startBreak);

          $("#breaknum").html(breakTime);
          $("#reset").show();
          $("#breaknum, #timetype").hide();
        }
        if(breakTime%60>=10){
          $("#breaknum").html(Math.floor(breakTime/60)+":"+breakTime%60);
        } else {
              $("#breaknum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
        }

    }
  }


  });

  $("#reset").click(function(){
    count=25;
    breakTime=25;
    $("#num").html(count);
    $("#breaknum").html(breakTime);
    $("#start, #minusBreak, #minusSClock, #addSBreak, #addSClock, #breaknum, #num, #title1, #title ").show();
    $("#reset").hide();
  });


  $("#addSClock").click(function(){

    count += 5;
    $("#num").html(count);
    console.log(count);

  });

  $("#minusSClock").click(function(){
    if(count > 5){
    count -= 5;
    $("#num").html(count);
    //console.log(count);
  }
  });



  $("#addSBreak").click(function(){

    breakTime += 5;
    $("#breaknum").html(breakTime);
    console.log(count);

  });

  $("#minusBreak").click(function(){
    if(breakTime > 5){
    breakTime -= 5;
    $("#breaknum").html(breakTime);

  }
  });










});
