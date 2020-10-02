$(document).ready(function(){
  
  $(".saveBtn").on("click", function (){
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)

  })
  function hourUpdater(){
    var currentHour = moment().hours() // look up moment js
    $(".time-block").each(function(){
      var blockHr = parseInt($(this).attr("id").split("-")[1])
      if(blockHr < currentHour){
        $(this).addClass("past")

      }else if(blockHr === currentHour){
        $(this).removeClass("past")
        $(this).addClass("present")

      }else{
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")


      }
    })

  }
  
  hourUpdater();
  // var interval as set interval run hour updater every 15 seconds

  var interval =


  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-9 .description").val(localStorage.getItem("hour-10"));
  $("#hour-9 .description").val(localStorage.getItem("hour=11"));
  $("#hour-9 .description").val(localStorage.getItem("hour-12"));
  $("#hour-9 .description").val(localStorage.getItem("hour-13"));
  $("#hour-9 .description").val(localStorage.getItem("hour-14"));
  $("#hour-9 .description").val(localStorage.getItem("hour-15"));
  $("#hour-9 .description").val(localStorage.getItem("hour-16"));
  $("#hour-9 .description").val(localStorage.getItem("hour-17"));


  $("#currentDay").text(moment().format("dddd, MMMM Do"));




})