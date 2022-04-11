var currentDayEl = $('#currentDay')
var hourEl = $(".hour")
var textEl = $(".textDiv")
var saveBtnEl = $(".btn")
var coloredArea = $(".hour")
var localPull = JSON.parse(localStorage.getItem("itinerary"))
var saveArr = []


//use moment.js to display current date
setInterval(function() {
    var time = moment().format("MMMM Do, YYYY, h:mm:ss a");
$("#currentDay").text(time); 
},1000);

// Function to track time to determine block colors
function trackTime() {
    var now = moment().hours();

    coloredArea.each(function() {
    let colorBlocks = $(this).attr("id");
  
    if (colorBlocks < now) {
        $(this).addClass("past")
            console.log('Before worked');

    } else if (colorBlocks === now) {
        $(this).addClass("present")
            console.log('Present worked');

    } else {
        $(this).addClass("future")
            console.log('After worked');
          };
    });
};

//save upon button click
saveBtnEl.on("click", function() {

    //save information
    var time = $(this).siblings(".hour").text();
    var text = $(this).siblings(".textDiv").val();

    //then text is saved in localStorage   
    localStorage.setItem(time, text)
})

//upon refresh of the page - saved item remains
function planner () {

    $(".hour").each(function() {
    var currentHour = $(this).text();
    var plannerText = localStorage.getItem(currentHour);

    if(plannerText !== null) {
        $(this).siblings(".textDiv").val(plannerText)
    }

    });
}

// Callback Function
trackTime();
planner();