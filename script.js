(function () {});
  
//you need to set up the format of the dates
var today = moment().format("dddd, MMMM Do");
console.log(today);

$("#currentDay").text(today);
setInterval(function (){
    var now = moment().format("LTS");
    $("#currentMoment").text(now);
    // console.log(now);
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

if (localStorage.getItem("workDay")) {
	schedule = JSON.parse(localStorage.getItem("workDay"));
	console.log(schedule);
}

//does it need to be stored locally
//it needs to know what the today's date is
// there needs to be rows for each hour and connected to the HTML
function appendRowToContainer(row, index){
  console.log(row)
 $(".container").append(`<div class="row time-block" data-index=${index}>
 <div class= "hour" >${row.time}</div>
 <textarea>${row.event}</textarea>
 <button class="saveBtn" id="save"><i class="fas fa-save"></i></button>
</div>`) 
};
for (let index = 0; index < schedule.length; index++) {
  const element = schedule[index];
  appendRowToContainer(element, index)
  
}


// Do I color the rows in JS or CSS? (let's do rainbows again)
function colorRow(time) {
	var planNow = moment(now, "LTS");
	var planEntry = moment(time, "LTS");
	if (planNow.isBefore(planEntry) === true) {
		return "future";
	} else if (planNow.isAfter(planEntry) === true) {
		return "past";
	} else {
		return "present";
	}
}


// how do I save events? local storage or something else?
$(document).on("click",".saveBtn", function() {
	var blockID = parseInt(
		$(this)
			.closest(".time-block")
			.attr("data-index")
	);
	var userEntry = $.trim(
		$(this)
			// .parent("row")
			.siblings("textarea")
			.val()
	);
	// var schedule = JSON.parse(localStorage.getItem("workDay"));
// if (events) {
//   planWorkday = events;
// }
// console.log(events)
schedule[blockID].event = userEntry;
console.log(blockID);
console.log(userEntry);
localStorage.setItem("workDay", JSON.stringify(schedule));
	// planWorkday[events].event = userEntry;
//how do I make the buttons work?
});