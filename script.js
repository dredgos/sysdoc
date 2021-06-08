let today = new Date();
let christmasDay = new Date(2021,12,25);
let newYearsDay = new Date(2022,01,01);
let valentinesDay = new Date(2022,02,14);
let importantDates = [christmasDay, newYearsDay, valentinesDay];
let differenceInMs = (date) => (date-today);
let convertMsToDays = (ms) => (ms/(24*3600*1000));
let dateDifferences = importantDates.map(date => parseInt(convertMsToDays(differenceInMs(date)).toFixed(0)))


  $("#trigger").click(function(){
    dateDifferences.map(difference => $("#days-until").append("<li>" + difference.toString()+" days until Valentines Day</li>"))
    
  })

