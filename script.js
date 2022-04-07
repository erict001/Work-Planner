var currentDayEl = $('#currentDay')
var hourEl = $(".hourPlace")
var textEl = $(".textDiv")
var saveBtnEl = $(".btn")
var localPull = JSON.parse(localStorage.getItem("itinerary"))
var saveArr = []
var finish = localPull[0]
var hourText = Number(hourEl.text())
var timeText = Number(moment().format("HH"))

//Moment.js global variables
var time = moment()
var beforeTime = 


//use moment.js to display current date
setInterval(function() {
    var time = moment().format("h:mm:ss a");
$("#currentDay").text(time); 
},1000);

// User fills in text using input box
// User clicks the save button and the information gets put into local Storage

// save text to console

function saveText() {
    var toDo = [{
        work: $(this).siblings("input").val(),
        hour: $(this).siblings("div").text(),
    }]

    saveArr.push(toDo)

    console.log(toDo)

    var schedule = JSON.stringify(saveArr)

    if (localPull === null) {
        JSON.stringify(schedule)
        localStorage.setItem("itinerary", schedule)
    } else {
        saveArr.push(JSON.parse(localStorage.getItem("itinerary")))
        localStorage.setItem("itinerary", schedule)
    }
};
saveBtnEl.click(saveText)
console.log(saveBtnEl)


function renderMessage() {

    if (localPull !== null) {
        
    }
  }


//Local storage gets item and renders on field

//User inputs text into section 

//save button is clicked in section

if (hourText <  timeText) {
    textEl.addClass("past");
    textEl.removeClass("present");
    textEl.removeClass("future");

} else if (hourText === timeText) {
    textEl.
    textEl.addClass("present");
    textEl.removeClass("past")
    textEl.removeClass("future")

} else {
    textEl.addClass("future");
    textEl.removeClass("past")
    textEl.removeClass("present")
}

