let today = new Date();
let christmasDay = new Date(2021,12,25);
let newYearsDay = new Date(2022,01,01);
let valentinesDay = new Date(2022,02,14);
let importantDates = [christmasDay, newYearsDay, valentinesDay];

let differenceInMs = (date) => (date-today);
let convertMsToDays = (ms) => (ms/(24*3600*1000));

$("#trigger").click(function(){
    var daysDifference = parseInt(convertMsToDays(differenceInMs(christmasDay)).toFixed(0));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until Christmas</li>");
  })
  
  $("#trigger").click(function(){
    var daysDifference = parseInt(convertMsToDays(differenceInMs(newYearsDay)).toFixed(0));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until New Year</li>");
  })
  
  $("#trigger").click(function(){
    var daysDifference = parseInt(convertMsToDays(differenceInMs(valentinesDay)).toFixed(0));
    
    $("#days-until").append("<li>" + daysDifference.toString()+" days until Valentines Day</li>");
  })