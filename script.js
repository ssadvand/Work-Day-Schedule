(function () {});
  
//you need to set up the format of the dates
var today = moment().format("dddd, MMMM Do");
console.log(today);

$("#currentDay").text(today);
setInterval(function (){
    var now = moment().format("LTS");
    $("#currentMoment").text(now);
    console.log(now);
},250);

//you need to schedule things
var schedule = [
  { time: "8 AM", event: "" },
  { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
  { time: "11 AM", event: "" },
  { time: "12 PM", event: "" },
  { time: "1 PM", event: "" },
  { time: "2 PM", event: "" },
  { time: "3 PM", event: "" },
  { time: "4 PM", event: "" },
  { time: "5 PM", event: "" },
];

//does it need to be stored locally


//it needs to know what the today's date is


// there needs to be rows for each hour and connected to the HTML
function appendRowToContainer(row){
  console.log(row)
 $(".container").append(`<div class="row time-block">
 <div id="a" class= "hour">${row.time}</div>
 <textarea id="b"></textarea>
 <button class="saveBtn" id="save"><i class="fas fa-save"></i></button>
</div>`) 
};
for (let index = 0; index < schedule.length; index++) {
  const element = schedule[index];
  appendRowToContainer(element)
  
}


// Do I color the rows in JS or CSS? (let's do rainbows again)


// how do I save events? local storage or something else?
//how do I make the buttons work?
