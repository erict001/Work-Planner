var currentDayEl = $('#currentDay')
var hourEl = $(".hour")
var textEl = $(".textDiv")
var saveBtnEl = $(".btn")
var localPull = JSON.parse(localStorage.getItem("itinerary"))
var saveArr = []
// var finish = localPull[]
// var hourText = Number(hourEl.text())
// var timeText = Number(moment().format("HH"))


//Moment.js global variables



//use moment.js to display current date
setInterval(function() {
    var time = moment().format("h:mm:ss a");
$("#currentDay").text(time); 
},1000);

// User fills in text using input box
// User clicks the save button and the information gets put into local Storage

// save text to console

// function saveText() {
//     var toDo = [{
//         work: $(this).siblings("input").val(),
//         hour: $(this).siblings("div").text(),
//     }]

//     saveArr.push(toDo)

//     console.log(toDo)

//     var schedule = JSON.stringify(saveArr)

//     if (localPull === null) {
//         JSON.stringify(schedule)
//         localStorage.setItem("itinerary", schedule)
//     } else {
//         saveArr.push(JSON.parse(localStorage.getItem("itinerary")))
//         localStorage.setItem("itinerary", schedule)
//     }
// };
// saveBtnEl.click(saveText)
// console.log(saveBtnEl)


// function renderMessage() {

//     if (localPull !== null) {
        
//     }
//   }

//save text to console

$(document).ready(function(saveText) {
    //listen for button clicks
    saveBtnEl.onclick(saveText)
    //get nearby values/time
    var toDo = [{
        work: $(this).siblings("input").val(),
       hour: $(this).siblings("div").text(),
           }]
    //save in local Storage
    localStorage.setItem("toDo", JSON.stringify(textEl))

   

});

console.log(textEl)

//Moment = time (.past)
// if (hourText <  time) {
//     textEl.addClass("past");
//     textEl.removeClass("present");
//     textEl.removeClass("future");

// //Moment = time (.present)
// } else if (hourText == time) {
//     textEl.addClass("present");
//     textEl.removeClass("past")
//     textEl.removeClass("future")

// //Moment < time (.future)
// } else {
//     textEl.addClass("future");
//     textEl.removeClass("past")
//     textEl.removeClass("present")
// }

var time = moment();

function trackTime() {
    var timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (var i = 0; i < timeSlot.length; i++) {
        var hour = timeSlot [i];

    if (time > hourEl) {
        document.querySelectorAll('.hour').forEach(function (dscrpB) {
            dscrpB.classList.add('past');
            console.log('Before worked');
          });

    } else if (time == hourEl) {
        document.querySelectorAll('.hour').forEach(function (dscrpB) {
            dscrpB.classList.add('present');
            console.log('Present worked');
          });

    } else {
        document.querySelectorAll('.hour').forEach(function (dscrpB) {
            dscrpB.classList.add('future');
            console.log('After worked');
          });
}
    }};
trackTime();