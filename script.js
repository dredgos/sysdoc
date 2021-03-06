let today = new Date();
let importantDates = [new Date(2021,12,25), new Date(2022,01,01), new Date(2022,02,14)];
let dateNames = ["Christmas", "New Years", "Valentines"];

let differenceInMs = (date) => (date-today);
let convertMsToDays = (ms) => (ms/(24*3600*1000));

let dateDifferences = importantDates.map(date => parseInt(convertMsToDays(differenceInMs(date)).toFixed(0)))


$("#trigger").click(function(){
    dateDifferences.map((difference, index) => $("#days-until").append(`<li> ${difference.toString()} days until ${dateNames[index]} Day</li>`));    
})


