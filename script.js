let today = new Date();
let christmasDay = new Date(2021,12,25);
let newYearsDay = new Date(2022,01,01);
let valentinesDay = new Date(2022,02,14);
let importantDates = [christmasDay, newYearsDay, valentinesDay];

$("#trigger").click(function(){
    var daysDifference = parseInt((christmasDay-today)/(24*3600*1000));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until Christmas</li>");
  })
  
  $("#trigger").click(function(){
    var daysDifference = parseInt((newYearsDay-today)/(24*3600*1000));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until New Year</li>");
  })
  
  $("#trigger").click(function(){
    var daysDifference = parseInt((valentinesDay-today)/(24*3600*1000));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until Valentines Day</li>");
  })