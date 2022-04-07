var currentDayEl = $('#currentDay')
var hourEl = $(".hour")
var textEl = $(".text")
var saveBtnEl = $(".btn")
var localPull = JSON.parse(localStorage.getItem("itinerary"))
var saveArr = []
var finish = localPull[""]

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
        hour: $(this).siblings("h4").text(),
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

// if (hour.val() === moment().format("hh a")) {
//     moment().style.propery = "green";
// } else if (hour.val() === moment().isBefore("hh a")) 